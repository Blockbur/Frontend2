import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import {
  getSummary,
  instantiateContract,
  instantiteContractWithRpcUrl,
} from '../../contract/functions'
import { ChangeAmountToMint } from './components/ChangeAmountToMint'

import { ethers } from 'ethers'

import nftImage from '@/assets/mint/nft.png'

export interface NFTProps {
  totalSupply: number | undefined
  totalNFTsMinted: number | undefined
  maxSupplyPerWallet: number | undefined
  nftsMintedByWallet: number | undefined
}

export function Minter() {
  const [nft, setNft] = useState<NFTProps>()

  const [isOnWhitelist, setIsOnWhitelist] = useState<boolean>(false)
  const [isMinting, setIsMinting] = useState<boolean>(false)
  const [isWhitelistOn, setIsWhitelistOn] = useState<boolean>(false)
  const [signature, setSignature] = useState<string>('')

  const [amountOfNftsToMint, setAmountOfNftsToMint] = useState<number>(0)
  const [walletAddress, setWalletAddress] = useState<string>('')
  const [contractIsEnabled, setContractEnabled] = useState<boolean>(true)

  const nftPrice = 0.01

  const blockIncreaseNFTsAmounToMint =
    Number(nft?.totalNFTsMinted) + amountOfNftsToMint ===
      nft?.maxSupplyPerWallet ||
    amountOfNftsToMint + Number(nft?.nftsMintedByWallet) ===
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

    if (isWhitelistOn) {
      setIsWhitelistOn(true)
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

      await fetch(url, config)
        .then((res) => res.json())
        .then((res) => {
          if (res.error === 'Address does not allowed in whitelist') {
            setIsOnWhitelist(false)
          } else {
            setSignature(res.result)
            setIsOnWhitelist(true)
          }
        })
    }
  }

  async function onMintNFT() {
    const { ethereum } = window

    if (ethereum) {
      try {
        setIsMinting(true)

        const contract = await instantiateContract()

        const isEnabled = await contract.isEnabled()

        if (isEnabled) {
          if (isWhitelistOn) {
            try {
              await contract.mintNFT(amountOfNftsToMint, signature, {
                value: ethers.parseUnits(
                  String(amountOfNftsToMint * nftPrice),
                  'ether',
                ),
              })
            } catch (err) {
              console.log('err', err)
            }

            setIsMinting(false)
          } else {
            await contract.mintNFT(amountOfNftsToMint, {
              value: ethers.parseUnits(
                String(amountOfNftsToMint * nftPrice),
                'ether',
              ),
            })
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
        setWalletAddress(accounts[0])
      } else {
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
        await getNFTInitialData(walletAddress)
        await verifyIfUserIsInWhitelist(walletAddress)
      }
    })()
  }, [walletAddress])

  if (walletAddress) {
    return (
      <div className="max-w-[328px] lg:max-w-[966px] bg-[#18134E] w-full rounded-[24px] py-12 px-4 lg:px-9 flex flex-col lg:flex-row items-stretch justify-between mx-auto shadow-xl text-white">
        <div className="max-w-[328px] w-full flex flex-col gap-8">
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

          <div className="w-full hidden lg:flex flex-col gap-14">
            <ChangeAmountToMint
              maxReached={blockIncreaseNFTsAmounToMint}
              amountOfNftsToMint={amountOfNftsToMint}
              onDecreaseAmount={onDecreaseBuyAmount}
              onIncreaseAmount={onIncreaseBuyAmount}
            />
            <div className="flex flex-col gap-4 font-medium mt-6">
              <span className="text-gray100 text-lg">
                Total supply: {nft?.totalNFTsMinted} / {nft?.totalSupply}
              </span>
              {isOnWhitelist || !disableMint ? (
                <button
                  onClick={onMintNFT}
                  className="w-[404px] py-4 bg-gradient-to-r from-[#51CE06] via-[#88E553] to-[#C0FDA3] rounded-xl text-lg text-black font-bold disabled:cursor-not-allowed disabled:bg-gray500"
                >
                  MINT ({nft?.nftsMintedByWallet} / {nft?.maxSupplyPerWallet})
                </button>
              ) : (
                // <MintButton
                //   disabled={disableMint}
                //   walletAddress={walletAddress}
                //   maxSupplyPerUser={nft?.maxSupplyPerWallet || 0}
                //   mintedByUserAmount={nft?.nftsMintedByWallet || 0}
                //   onClick={onMintNFT}
                //   isMinting={isMinting}
                // />
                <button
                  disabled
                  className="w-[404px] cursor-not-allowed py-4 bg-gradient-to-r from-[#CD7001] to-[#FAA034] rounded-xl text-lg text-white font-bold"
                >
                  MINTING SOON
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-8 lg:mt-0">
          <h1 className="text-[3rem] text-center lg:text-end flex items-center gap-3 justify-center lg:justify-end font-bold">
            {(amountOfNftsToMint * 0.01).toFixed(2)} MATIC
          </h1>
          <Image
            className="mt-auto w-[400px] h-[400px]"
            src={nftImage}
            width={403}
            height={403}
            alt="NFT image"
          />
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
