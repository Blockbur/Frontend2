import { CaretLeft, CaretRight } from 'phosphor-react'

interface ChangeAmountToMintProps {
  amountOfNftsToMint: number
  maxReached: boolean
  onIncreaseAmount: () => void
  onDecreaseAmount: () => void
}

export function ChangeAmountToMint({
  amountOfNftsToMint,
  onDecreaseAmount,
  onIncreaseAmount,
  maxReached,
}: ChangeAmountToMintProps) {
  const limitPerMint = amountOfNftsToMint === 3

  function handleDecreaseBuyAmount() {
    onDecreaseAmount()
  }

  function handleIncreaseBuyAmount() {
    onIncreaseAmount()
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">AMOUNT: </h2>
      <div className="flex item-center gap-4">
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

        {maxReached || limitPerMint ? null : (
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
