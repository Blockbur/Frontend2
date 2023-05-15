'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import logo from '../assets/weirdsLogo.svg'
import discordIcon from '../assets/discord.svg'
import twitterLogo from '../assets/twitter.svg'
import { List, X } from 'phosphor-react'

import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const headerNav = [
    { label: 'HOME', href: '/' },
    { label: 'MINT', href: '/mint' },
    { label: 'WEIRD PAPER', href: 'https://paper.weirdband.io/' },
    { label: 'MARKETPLACE', href: '#' },
  ]

  return (
    <div className="w-full bg-purple400/70 fixed z-50 text-white">
      <header className="max-w-[393px] lg:max-w-[1120px] w-full mx-auto flex items-center justify-between py-5 px-8 lg:px-0">
        <Link href="/">
          <Image src={logo} alt="Weirds logo" />
        </Link>
        <nav className="hidden lg:flex">
          <div className="flex items-center gap-16">
            <ul className="flex items-center gap-12">
              {headerNav.map((item) => {
                return (
                  <li
                    className="text-[1.25rem] hover:text-purple200 transition duration-300 text-base"
                    key={item.label}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                )
              })}
            </ul>
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
        </nav>
        <button
          onClick={() =>
            window.location.replace('https://discord.gg/sgBex4tc7p')
          }
          className="hidden lg:block text-black font-bold py-2 px-8 rounded-[60px] bg-yellow500 shadow-[0_0px_10px_rgba(255,189,46,1)] hover:shadow-[0_0px_20px_rgba(255,189,46,1)] transition duration-300"
        >
          JOIN US
        </button>
        <div className="lg:hidden">
          <Dialog.Root open={isOpen}>
            <Dialog.Trigger onClick={() => setIsOpen(true)} className="z-20">
              <div className="rounded-2xl border border-white flex items-center justify-center px-4 py-0.5">
                <List size={24} weight="regular" className="text-white" />
              </div>
            </Dialog.Trigger>
            <Dialog.Overlay className="bg-[#332984]/70 inset-0 fixed z-20">
              <Dialog.Content className="w-screen h-screen px-8 pt-8 overflow-auto flex flex-col items-end backdrop-blur-lg">
                <Dialog.Trigger
                  className="rounded-2xl border border-white flex items-center justify-center px-4 py-0.5"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={24} weight="regular" className="text-white" />
                </Dialog.Trigger>
                <ul className="w-full mt-14 flex flex-col text-right gap-6 font-bold text-[1.25rem]">
                  {headerNav.map((navItem) => {
                    return (
                      <li
                        role="button"
                        onClick={() => setIsOpen(false)}
                        key={navItem.label}
                      >
                        <Link href={navItem.href}>{navItem.label}</Link>
                      </li>
                    )
                  })}
                </ul>
                <div className="flex items-center gap-4 mt-16">
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
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Root>
        </div>
      </header>
    </div>
  )
}
