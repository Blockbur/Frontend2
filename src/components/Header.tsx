import Image from 'next/image'
import Link from 'next/link'

import logo from '../assets/weirdsLogo.svg'
import discordIcon from '../assets/discord.svg'
import twitterLogo from '../assets/twitter.svg'

export function Header() {
  const headerNav = [
    { label: 'HOME', href: '#' },
    { label: 'MINT', href: '#' },
    { label: 'WEIRD PAPER', href: '#' },
  ]

  return (
    <div className="w-full bg-purple400/70 fixed z-20 text-white">
      <header className="max-w-[1120px] w-full mx-auto flex items-center justify-between py-5">
        <Image src={logo} alt="Weirds logo" />
        <nav>
          <div className="flex items-center gap-16">
            <ul className="flex items-center gap-12">
              {headerNav.map((item) => {
                return (
                  <li className="text-[1.25rem]" key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                )
              })}
            </ul>
            <div className="flex items-center gap-4">
              <Link href="#">
                <Image
                  src={twitterLogo}
                  width={24}
                  height={24}
                  alt="Twitter logo"
                />
              </Link>
              <Link href="#">
                <Image
                  src={discordIcon}
                  width={24}
                  height={24}
                  alt="Discord logo"
                />
              </Link>
            </div>
          </div>
        </nav>
        <button className="text-black font-bold py-2 px-8 rounded-[60px] bg-yellow500 shadow-[0_0px_10px_rgba(255,189,46,1)]">
          JOIN US
        </button>
      </header>
    </div>
  )
}
