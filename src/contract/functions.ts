import { ethers, toNumber } from 'ethers'
import contractAbi from '../contract/abi.json'
import { NFTProps } from '@/components/Minter'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ''

async function convertFromBigIntToInteger(number: any) {
  const bigNumberReturn = BigInt(number)
  const formattedInteger = toNumber(bigNumberReturn)

  return formattedInteger
}

export async function instantiteContractWithRpcUrl() {
  const provider = new ethers.JsonRpcProvider(
    'https://polygon-mainnet.g.alchemy.com/v2/na34V2wPZksuxFnkFxeebWVexYWG_SnR',
  )

  const contractInstance = new ethers.Contract(
    contractAddress,
    contractAbi,
    provider,
  )

  return contractInstance
}

export async function instantiateContract() {
  const provider = new ethers.BrowserProvider(window.ethereum)

  await provider.send('eth_requestAccounts', [])

  const signer = await provider.getSigner()

  const contractInstance = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer,
  )

  return contractInstance
}

export async function getTotalSupply(contractInstance: ethers.Contract) {
  const maxSupply = await contractInstance.maxSupply()

  const totalSupply = convertFromBigIntToInteger(maxSupply)

  return totalSupply
}

export async function getTotalNFTsMinted(contractInstance: ethers.Contract) {
  const tokenIds = await contractInstance._tokenIds()

  const totalNftsMinted = convertFromBigIntToInteger(tokenIds)

  return totalNftsMinted
}

export async function getTotalNFTsMintedByUser(
  contractInstance: ethers.Contract,
  walletAddress: string,
) {
  const { ethereum } = window

  if (ethereum) {
    const totalNFTsMintedByUser = await contractInstance.nftsMintedPerWallet(
      0,
      walletAddress,
    )

    const totalNftsMintedByWallet = convertFromBigIntToInteger(
      totalNFTsMintedByUser,
    )

    return totalNftsMintedByWallet
  }
}

export async function getMaxSupplyPerWallet(contractInstance: ethers.Contract) {
  const _maxNFTsPerWallet = await contractInstance.maxNFTsPerCollection(0)

  const maxSupplyPerWallet = convertFromBigIntToInteger(_maxNFTsPerWallet)

  return maxSupplyPerWallet
}

export async function getSummary(walletAddress: string) {
  const { ethereum } = window

  if (ethereum) {
    const contract = await instantiteContractWithRpcUrl()

    const [
      totalSupply,
      totalNFTsMinted,
      maxSupplyPerWallet,
      nftsMintedByWallet,
    ] = await Promise.all([
      getTotalSupply(contract),
      getTotalNFTsMinted(contract),
      getMaxSupplyPerWallet(contract),
      getTotalNFTsMintedByUser(contract, walletAddress),
    ])

    const summary: NFTProps = {
      totalSupply,
      totalNFTsMinted,
      maxSupplyPerWallet,
      nftsMintedByWallet,
    }

    return summary
  }
}
