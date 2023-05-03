import { Check } from 'phosphor-react'
import { Toast } from 'react-hot-toast'

export function SuccessAlert(t: Toast) {
  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } bg-[#18134E] px-8 py-3 shadow-lg rounded-md flex gap-4 items-center`}
    >
      <div className="rounded-full border border-transparent p-2 flex items-center justify-center bg-purple200/50">
        <Check size={18} weight="bold" className="text-[#18134E]" />
      </div>
      <span className="text-sm font-light">
        Your NFT was successfully minted!
      </span>
    </div>
  )
}
