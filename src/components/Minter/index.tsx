import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import contractAbi from '../../contract/abi.json'
import {
  getSummary,
  instantiteContractWithRpcUrl,
} from '../../contract/functions'
import { MintButton } from './components/MintButton'
import { ChangeAmountToMint } from './components/ChangeAmountToMint'

import { ethers } from 'ethers'

export interface NFTProps {
  totalSupply: number | undefined
  totalNFTsMinted: number | undefined
  maxSupplyPerWallet: number | undefined
  nftsMintedByWallet: number | undefined
}

export function Minter() {
  const [nft, setNft] = useState<NFTProps>()

  const [isMinting, setIsMinting] = useState<boolean>(false)

  const [amountOfNftsToMint, setAmountOfNftsToMint] = useState<number>(0)
  const [walletAddress, setWalletAddress] = useState<string>('')
  const [contractIsEnabled, setContractEnabled] = useState<boolean>(true)

  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ''

  const nftPrice = 0.01

  const blockIncreaseNFTsAmounToMint =
    Number(nft?.totalNFTsMinted) + amountOfNftsToMint ===
    nft?.maxSupplyPerWallet

  const maxSupplyReached = nft?.totalNFTsMinted === nft?.totalSupply

  const maxSupplyPerUserReached =
    nft?.nftsMintedByWallet === nft?.maxSupplyPerWallet

  const disableMint =
    !contractIsEnabled || maxSupplyReached || maxSupplyPerUserReached

  function onIncreaseBuyAmount() {
    setAmountOfNftsToMint((prevAmount) => prevAmount + 1)
  }

  function onDecreaseBuyAmount() {
    setAmountOfNftsToMint((prevAmount) => prevAmount - 1)
  }

  async function verifyIfUserIsInWhitelist(walletAddress: string) {
    const contract = await instantiteContractWithRpcUrl()

    const isWhitelistOn = await contract.isWhitelistOn()
    console.log('isWhitelistOn ==>', isWhitelistOn)

    if (isWhitelistOn) {
      const data = JSON.stringify({
        address: walletAddress,
      })

      const url = 'https://parseapi.back4app.com/functions/getWhitelist'
      const config = {
        method: 'post',
        headers: {
          'X-Parse-Application-Id': 'Xz46bQ1hZnI5ErWIEhhre7zlNXlXxRIzFZjt5t21',
          'X-Parse-REST-API-Key': 'o3GkupLY9PPTEtJzynIcU6BNguJ6KTB5lAvfqGp4',
          'Content-Type': 'application/json',
        },
        body: data,
      }

      await fetch(url, config).then((res) => {
        console.log('RESPONSE', res.json())
      })
    }
  }

  async function onMintNFT() {
    const { ethereum } = window

    if (ethereum) {
      try {
        setIsMinting(true)
        const provider = new ethers.BrowserProvider(window.ethereum)

        await provider.send('eth_requestAccounts', [])

        const contractInstace = new ethers.Contract(
          contractAddress,
          contractAbi,
          provider,
        )

        const isEnabled = await contractInstace.isEnabled()
        console.log('isEnabled', isEnabled)

        if (isEnabled) {
          const isWhitelistOn = await contractInstace.isWhitelistOn()
          console.log('isWhitelistOn', isWhitelistOn)

          if (isWhitelistOn) {
            const addressIsOnWhitelist = await contractInstace.addressToBoolWl(
              walletAddress,
            )
            console.log('addressIsOnWhitelist', addressIsOnWhitelist)

            if (Number(nft?.nftsMintedByWallet) + amountOfNftsToMint > 5) {
              alert('You can not mint more than 5 NFTs per wallet!')
              setIsMinting(false)
              // eslint-disable-next-line no-throw-literal
              throw 'You can not mint more than 5 NFTs per wallet!'
            }

            if (!addressIsOnWhitelist) {
              alert('Your address is not whitelisted!')
              setIsMinting(false)
              // eslint-disable-next-line no-throw-literal
              throw 'Your address is not whitelisted!'
            }

            if (addressIsOnWhitelist) {
              const mintNft = await contractInstace.mintNFT(
                amountOfNftsToMint,
                {
                  value: ethers.parseUnits(
                    String(amountOfNftsToMint * nftPrice),
                    'ether',
                  ),
                },
              )

              console.log('mintNftWithWhitelist', mintNft)
              setIsMinting(false)
            }
          } else {
            const mintNft = await contractInstace.mintNFT(amountOfNftsToMint, {
              value: ethers.parseUnits(
                String(amountOfNftsToMint * nftPrice),
                'ether',
              ),
            })
            console.log('mintNft', mintNft)
            setIsMinting(false)
          }
        } else {
          setContractEnabled(false)
        }
      } catch (err) {
        setIsMinting(false)
      }
    } else {
      alert("You don't have the metamask extension installed!")
    }
  }

  async function handleConnectWallet() {
    const { ethereum } = window

    if (ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum)

      // MetaMask requires requesting permission to connect users accounts
      const accounts = await provider.send('eth_requestAccounts', [])

      if (accounts.length) {
        const address = accounts[0]

        setWalletAddress(address)
      }
    } else {
      alert("You don't have the metamask extension installed!")
    }
  }

  async function verifyIfWalletIsConnected() {
    const { ethereum } = window

    if (ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum)

      const accounts = await provider.send('eth_accounts', [])

      if (accounts[0]) {
        console.log('Wallet is connected to network:', accounts[0])
        setWalletAddress(accounts[0])
      } else {
        console.log('Wallet is not connected')
        setWalletAddress('')
      }
    } else {
      alert("You don't have the metamask extension installed!")
    }
  }

  async function getNFTInitialData(walletAddress: string) {
    const summary = await getSummary(walletAddress)

    console.log('data', summary)

    setNft(summary)
  }

  useEffect(() => {
    ;(async () => {
      await verifyIfWalletIsConnected()
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      if (walletAddress) {
        console.log('wallet address', walletAddress)
        await getNFTInitialData(walletAddress)
      }
    })()
  }, [walletAddress])

  if (walletAddress) {
    return (
      <div className="max-w-[328px] lg:max-w-[966px] bg-[#18134E] w-full rounded-[24px] py-12 px-4 lg:px-9 flex flex-col lg:flex-row items-stretch justify-between mx-auto shadow-xl text-white">
        <div className="max-w-[328px] w-full flex flex-col gap-14">
          <div className="w-[357px] flex flex-col gap-2">
            <h1 className="text-[2rem] lg:text-[2.5rem] font-grandstander font-black">
              NFT NAME
            </h1>
            <p className="font-regular">
              Heard that sound? Are the Weird Ships arriving on Planet Earth.
              Each one will contain one of the three initial Weirds:{' '}
              <strong className="font-bold">Sneeze, Gulp or Lady Kinky</strong>.
              Mint to hear one of them playing something weird!
            </p>
          </div>

          <div className="hidden lg:flex flex-col gap-14">
            <ChangeAmountToMint
              amountOfNftsToMint={amountOfNftsToMint}
              onDecreaseAmount={onDecreaseBuyAmount}
              onIncreaseAmount={onIncreaseBuyAmount}
              blockAmountChange={blockIncreaseNFTsAmounToMint}
            />
            <div className="flex flex-col gap-4 font-medium">
              <span className="text-gray100 text-lg">
                Total supply: {nft?.totalNFTsMinted} / {nft?.totalSupply}
              </span>
              <MintButton
                disabled={disableMint}
                walletAddress={walletAddress}
                maxSupplyPerUser={nft?.maxSupplyPerWallet || 0}
                mintedByUserAmount={nft?.totalNFTsMintedByUser || 0}
                onClick={onMintNFT}
                isMinting={isMinting}
              />
            </div>
          </div>
        </div>
        <div className="max-w-[328px] w-full flex flex-col gap-8 mt-8 lg:mt-0">
          <h1 className="text-3xl text-center lg:text-end flex items-center gap-3 justify-center lg:justify-end">
            <span className="text-2xl font-medium">Total Price:</span>
            <strong className="font-bold">
              {amountOfNftsToMint * 0.01} ETH
            </strong>
          </h1>
          <Image className="mt-auto" src={''} alt="NFT image" />
        </div>
      </div>
    )
  } else {
    return (
      <div className="max-w-[328px] lg:max-w-[640px] bg-[#18134E] w-full rounded-[24px] py-12 px-4 lg:px-9 flex flex-col lg:flex-row items-stretch justify-between mx-auto shadow-xl text-white">
        <div className="max-w-[540px] w-full flex flex-col items-center gap-14 mx-auto">
          <div className="w-[357px] flex flex-col text-center gap-2">
            <h1 className="text-[2rem] lg:text-[2.5rem] font-grandstander font-black leading-none">
              OOPS... CONNECT BEFORE MINT!
            </h1>
            <p className="font-regular">
              In order to mint Weirds´ NFTs you must be connected to your
              Metamask!
            </p>
          </div>

          <button
            onClick={handleConnectWallet}
            className="w-full py-4 bg-gradient-to-r from-[#51CE06] via-[#88E553] to-[#C0FDA3] rounded-xl text-lg text-black font-bold disabled:cursor-not-allowed disabled:bg-gray500"
          >
            CONNECT WALLET
          </button>
        </div>
      </div>
    )
  }
}
