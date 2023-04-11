import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import contractAbi from '../../contract/abi.json'
import {
  getMaxSupplyPerWallet,
  getTotalNFTsMinted,
  getTotalNFTsMintedByUser,
  getTotalSupply,
} from '../../contract/functions'
import { MintButton } from './components/MintButton'
import { ChangeAmountToMint } from './components/ChangeAmountToMint'

import { ethers } from 'ethers'

interface NFTProps {
  totalSupply: number | undefined
  maxSupplyPerWallet: number | undefined
  totalNFTsMinted: number | undefined
  totalNFTsMintedByUser: number | undefined
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
    nft?.totalNFTsMintedByUser === nft?.maxSupplyPerWallet

  const disableMint =
    !contractIsEnabled || maxSupplyReached || maxSupplyPerUserReached

  function onIncreaseBuyAmount() {
    setAmountOfNftsToMint((prevAmount) => prevAmount + 1)
  }

  function onDecreaseBuyAmount() {
    setAmountOfNftsToMint((prevAmount) => prevAmount - 1)
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

            if (Number(nft?.totalNFTsMintedByUser) + amountOfNftsToMint > 5) {
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

  async function verifyIfWalletIsConnected() {
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

  async function getNFTInitialData(walletAddress: string) {
    const [
      totalSupply,
      maxSupplyPerWallet,
      totalNFTsMinted,
      totalNFTsMintedByUser,
    ] = await Promise.all([
      getTotalSupply(),
      getMaxSupplyPerWallet(),
      getTotalNFTsMinted(),
      getTotalNFTsMintedByUser(walletAddress),
    ])

    setNft({
      maxSupplyPerWallet,
      totalSupply,
      totalNFTsMinted,
      totalNFTsMintedByUser,
    })
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
      }
    })()
  }, [walletAddress])

  return (
    <div className="max-w-[328px] lg:max-w-[800px] bg-purple500 w-full rounded-[24px] py-12 px-4 lg:px-9 flex flex-col lg:flex-row items-stretch justify-between mx-auto shadow-xl text-white">
      <div className="max-w-[328px] w-full flex flex-col gap-14">
        <div className="flex flex-col gap-2">
          <h1 className="text-[2rem] lg:text-[2.5rem] font-grandstander font-black">
            NFT NAME
          </h1>
          <p className="font-light text-[1.25rem]">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industrys standard dummy
          </p>
        </div>
        <div className="flex lg:hidden">
          <p className="italic">
            In order to mint our NFTs, open our website in your favorite Desktop
            Browser e.g. Chrome, Firefox, etc.
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
          <strong className="font-bold">{amountOfNftsToMint * 0.01} ETH</strong>
        </h1>
        <Image className="mt-auto" src={''} alt="NFT image" />
      </div>
    </div>
  )
}
