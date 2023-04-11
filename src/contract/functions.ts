import { ethers, toNumber } from 'ethers'
import contractAbi from '../contract/abi.json'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ''

async function instantiateContract() {
  const provider = new ethers.BrowserProvider(window.ethereum)

  await provider.send('eth_requestAccounts', [])

  const contractInstance = new ethers.Contract(
    contractAddress,
    contractAbi,
    provider,
  )

  return contractInstance
}

export async function getTotalSupply() {
  const { ethereum } = window

  if (ethereum) {
    const contract = await instantiateContract()

    const totalSupply = await contract.maxSupply()

    const bigNumberReturn = BigInt(totalSupply._hex)

    const formattedTotalSupply = toNumber(bigNumberReturn)

    return formattedTotalSupply
  }
}

export async function getTotalNFTsMinted() {
  const { ethereum } = window

  if (ethereum) {
    const contract = await instantiateContract()

    const totalNFTsMinted = await contract._tokenIds()

    const bigNumberReturn = totalNFTsMinted._hex.toBigInt()

    const formattedTotalNFTsMinted = bigNumberReturn.toNumber()

    return formattedTotalNFTsMinted
  }
}

export async function getTotalNFTsMintedByUser(walletAddress: string) {
  const { ethereum } = window

  if (ethereum) {
    const contract = await instantiateContract()

    const totalNFTsMintedByUser = await contract.nftsMintedPerWallet(
      walletAddress,
    )

    const bigNumberReturn = BigInt(totalNFTsMintedByUser._hex)

    const formattedTotalNFTsMintedByUser = Number(bigNumberReturn)

    return formattedTotalNFTsMintedByUser
  }
}

export async function getMaxSupplyPerWallet() {
  const { ethereum } = window

  if (ethereum) {
    const contract = await instantiateContract()

    const maxSupplyPerWallet = await contract.maxNFTsPerWallet()

    const bigNumberReturn = BigInt(maxSupplyPerWallet._hex)

    const formattedMaxSupplyPerWallet = toNumber(bigNumberReturn)

    return formattedMaxSupplyPerWallet
  }
}
