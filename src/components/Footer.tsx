import Image from 'next/image'
import Link from 'next/link'

import discordIcon from '@/assets/discord.svg'
import twitterLogo from '@/assets/twitter.svg'
import brand from '@/assets/brand.png'

export function Footer() {
  return (
    <footer className="max-w-screen w-full bg-purple300 py-9 text-white">
      <div className="max-w-[393px] lg:max-w-[1120px] px-8 lg:px-0 w-full mx-auto flex flex-col items-center lg:flex-row gap-8 lg:gap-0 justify-between">
        <div className="max-w-[612px] w-full text-lg underline flex flex-col gap-4 text-center lg:text-left">
          <a
            target="_blank"
            href="https://paper.weirdband.io/legal/terms-of-use"
            rel="noreferrer"
          >
            Terms of use
          </a>
          <a
            target="_blank"
            href="https://paper.weirdband.io/legal/privacy-policy"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">weirdband@2023</span>
          <div className="flex items-center gap-4">
            <Link href="https://twitter.com/WeirdBandNFT">
              <Image
                src={twitterLogo}
                width={24}
                height={24}
                alt="Twitter logo"
              />
            </Link>
            <Link href="https://discord.gg/sgBex4tc7p">
              <Image
                src={discordIcon}
                width={24}
                height={24}
                alt="Discord logo"
              />
            </Link>
          </div>
        </div>
        <Image src={brand} alt="Weird brand logo" />
      </div>
    </footer>
  )
}
