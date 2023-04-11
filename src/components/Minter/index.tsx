import Image from 'next/image'
import React, { useState } from 'react'
import { ethers } from 'ethers'

import contractAbi from '../../contract/abi.json'
import {
  getMaxSupplyPerWallet,
  getTotalNFTsMinted,
  getTotalNFTsMintedByUser,
  getTotalSupply,
} from '../../contract/functions'
import { MintButton } from './components/MintButton'
import { ChangeAmountToMint } from './components/ChangeAmountToMint'

export function Minter() {
  const [totalSupply, setTotalSupply] = useState<number>(0)
  const [maxSupplyPerWallet, setMaxSupplyPerWallet] = useState<number>(0)
  const [userNftsMinted, setUserNftsMinted] = useState<number>(0)
  const [isMinting, setIsMinting] = useState<boolean>(false)

  const [totalAmountOfNFTsMinted, setTotalAmountOfNFTsMinted] =
    useState<number>(0)
  const [amountOfNftsToMint, setAmountOfNftsToMint] = useState<number>(0)
  const [walletAddress, setWalletAddress] = useState<string>('')
  const [contractIsEnabled, setContractEnabled] = useState<boolean>(true)

  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ''

  const nftPrice = 0.01

  const blockIncreaseNFTsAmounToMint =
    totalAmountOfNFTsMinted + amountOfNftsToMint === maxSupplyPerWallet

  const maxSupplyReached = totalAmountOfNFTsMinted === totalSupply

  const maxSupplyPerUserReached = userNftsMinted === maxSupplyPerWallet

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
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        await provider.send('eth_requestAccounts', [])

        const signer = provider.getSigner()

        const contractInstace = new ethers.Contract(
          contractAddress,
          contractAbi,
          provider,
        )

        const contractWithSigner = await contractInstace.connect(signer)
        console.log('contractWithSigner', contractWithSigner)

        const isEnabled = await contractWithSigner.isEnabled()
        console.log('isEnabled', isEnabled)

        if (isEnabled) {
          const isWhitelistOn = await contractWithSigner.isWhitelistOn()
          console.log('isWhitelistOn', isWhitelistOn)

          if (isWhitelistOn) {
            const addressIsOnWhitelist =
              await contractWithSigner.addressToBoolWl(walletAddress)
            console.log('addressIsOnWhitelist', addressIsOnWhitelist)

            if (userNftsMinted + amountOfNftsToMint > 5) {
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
              const mintNft = await contractWithSigner.mintNFT(
                amountOfNftsToMint,
                {
                  value: ethers.utils.parseUnits(
                    String(amountOfNftsToMint * nftPrice),
                    'ether',
                  ),
                },
              )

              console.log('mintNftWithWhitelist', mintNft)
              setIsMinting(false)
            }
          } else {
            const mintNft = await contractWithSigner.mintNFT(
              amountOfNftsToMint,
              {
                value: ethers.utils.parseUnits(
                  String(amountOfNftsToMint * nftPrice),
                  'ether',
                ),
              },
            )
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
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      console.log('accounts', accounts)

      if (accounts.length) {
        const address = accounts[0]

        setWalletAddress(address)
      }
    } else {
      alert("You don't have the metamask extension installed!")
    }
  }

  async function getNFTInitialData(walletAddress: string) {
    const totalSupply = await getTotalSupply()
    setTotalSupply(totalSupply as number)

    const maxSupplyPerWallet = await getMaxSupplyPerWallet()
    setMaxSupplyPerWallet(maxSupplyPerWallet as number)

    const totalNFTsMinted = await getTotalNFTsMinted()
    setTotalAmountOfNFTsMinted(totalNFTsMinted as number)

    const totalNFTsMintedByUser = await getTotalNFTsMintedByUser(walletAddress)
    setUserNftsMinted(totalNFTsMintedByUser as number)
  }

  React.useEffect(() => {
    ;(async () => {
      await verifyIfWalletIsConnected()
    })()
  }, [])

  React.useEffect(() => {
    ;(async () => {
      if (walletAddress) {
        await getNFTInitialData(walletAddress)
      }
    })()
  }, [walletAddress])

  return (
    <div className="max-w-[328px] lg:max-w-[800px] w-full bg-blue800 rounded-[24px] py-12 px-4 lg:px-9 flex flex-col lg:flex-row items-stretch justify-between mx-auto shadow-xl">
      <div className="max-w-[328px] w-full flex flex-col gap-14">
        <div className="flex flex-col gap-2">
          <h1 className="text-[2rem] lg:text-[2.5rem] font-bold">NFT NAME</h1>
          <p className="text-blue200 font-medium">
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
              Total supply: {totalAmountOfNFTsMinted} / {totalSupply}
            </span>
            <MintButton
              disableMint={disableMint}
              walletAddress={walletAddress}
              maxSupplyPerUser={maxSupplyPerWallet}
              mintedByUserAmount={userNftsMinted}
              onMint={onMintNFT}
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
