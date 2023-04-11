import { CircleNotch } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'

interface MintButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mintedByUserAmount: number
  maxSupplyPerUser: number
  walletAddress: string
  isMinting: boolean
}

export function MintButton({
  walletAddress,
  maxSupplyPerUser,
  mintedByUserAmount,
  isMinting,
  ...rest
}: MintButtonProps) {
  return (
    <button
      {...rest}
      className="w-full py-4 bg-yellow500 shadow-[0_0px_10px_rgba(255,189,46,1)] rounded-xl text-lg text-black font-bold disabled:cursor-not-allowed disabled:bg-gray500"
    >
      {isMinting ? (
        <div className="flex items-center gap-3 justify-center">
          <span>Minting...</span>
          <CircleNotch
            size={24}
            className="text-white animate-spin"
            weight="bold"
          />
        </div>
      ) : (
        <span>
          MINT (Minted: {mintedByUserAmount} / {maxSupplyPerUser})
        </span>
      )}
    </button>
  )
}
