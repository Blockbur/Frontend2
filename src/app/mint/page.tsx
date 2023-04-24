'use client'

import Image from 'next/image'
import { Minter } from '../../components/Minter'

import nft2 from '@/assets/mint/nft2.png'
import nft3 from '@/assets/mint/nft3.png'
import nft4 from '@/assets/mint/nft4.png'

export default function Mint() {
  return (
    <div className="max-w-screen w-full min-h-screen bg-[#1F1863]">
      <div className="pt-48 pb-24">
        <Minter />
        <div className="max-w-[328px] lg:max-w-[966px] w-full mt-20 flex flex-col items-start mx-auto">
          <h1 className="font-grandstander font-black text-white text-[3rem] leading-none">
            Preview
          </h1>
          <p className="text-[#DDDDDD] mt-4">
            All of those Weirds can land in 8 different places.
          </p>
          <div className="w-full flex flex-col mt-7 bg-[#18134E] rounded-[24px] py-12 px-4 lg:px-16 items-center mx-auto shadow-xl text-white">
            <div className="w-full flex justify-between">
              <Image src={nft2} alt="" />
              <Image src={nft3} alt="" />
              <Image src={nft4} alt="" />
            </div>
            <p className="w-[405px] text-center text-[#BEBEBE] mt-10">
              In each location they play different music. Combine your Weirds to
              see them play together!
            </p>
          </div>
          <p className="w-[494px] mt-8 text-[#A8F380] text-lg">
            When minting a Weird Ship you have a 1% chance of landing a Weird
            Place, which is even more special.
          </p>
        </div>
      </div>
    </div>
  )
}
