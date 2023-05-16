import { CaretLeft, CaretRight } from 'phosphor-react'

interface ChangeAmountToMintProps {
  amountOfNftsToMint: number
  maxReached: boolean
  isWhitelistOn: boolean
  onIncreaseAmount: () => void
  onDecreaseAmount: () => void
}

export function ChangeAmountToMint({
  amountOfNftsToMint,
  onDecreaseAmount,
  onIncreaseAmount,
  maxReached,
  isWhitelistOn,
}: ChangeAmountToMintProps) {
  const limitPerMint = amountOfNftsToMint === 3

  function handleDecreaseBuyAmount() {
    onDecreaseAmount()
  }

  function handleIncreaseBuyAmount() {
    onIncreaseAmount()
  }

  const max = isWhitelistOn ? maxReached || limitPerMint : limitPerMint

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg lg:text-2xl font-bold">AMOUNT: </h2>
      <div className="flex item-center gap-2 lg:gap-4">
        <CaretLeft
          onClick={amountOfNftsToMint > 0 ? handleDecreaseBuyAmount : () => {}}
          className={` ${
            amountOfNftsToMint === 0
              ? `text-gray500 cursor-auto`
              : `text-white cursor-pointer`
          }`}
          size={48}
          weight="fill"
        />

        <span className="font-bold text-[32px] px-1">{amountOfNftsToMint}</span>

        {max ? null : (
          <CaretRight
            id="increase"
            onClick={handleIncreaseBuyAmount}
            className="text-white cursor-pointer"
            size={48}
            weight="fill"
          />
        )}
      </div>
    </div>
  )
}
