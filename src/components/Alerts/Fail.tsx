import { X } from 'phosphor-react'
import { Toast } from 'react-hot-toast'

interface FailAlertProps {
  message?: string
}

export function FailAlert(t: Toast, { message }: FailAlertProps) {
  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } bg-[#18134E] px-8 py-3 shadow-lg rounded-md flex gap-4 items-center`}
    >
      <div className="rounded-full border border-transparent p-2 flex items-center justify-center bg-red-400/70">
        <X size={18} weight="bold" className="text-red-900" />
      </div>
      <span className="text-sm font-light">
        {message || 'An error ocurred while trying to mint your NFT.'}
      </span>
    </div>
  )
}
