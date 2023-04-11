'use client'

import Image from 'next/image'
import Link from 'next/link'

import logo from '../assets/weirdsLogo.svg'
import kinkyOwnership from '../assets/kinkyOwnership.png'
import discordIcon from '../assets/discord.svg'
import twitterLogo from '../assets/twitter.svg'

import heroImg from '../assets/hero.png'

import controlGray from '../assets/core/controlGrade.png'
import controlGradient from '../assets/core/controlGradient.png'
import noteGray from '../assets/core/noteGray.png'
import noteGradient from '../assets/core/noteGradient.png'
import palletGray from '../assets/core/palletGray.png'
import palletGradient from '../assets/core/palletGradient.png'

import gulpDisabled from '../assets/weirds/glupDisabled.png'
import gulpHover from '../assets/weirds/glupHover.png'
import sneezeDisabled from '../assets/weirds/sneezeDisabled.png'
import sneezeHover from '../assets/weirds/sneezeHover.png'
import kinkyDisabled from '../assets/weirds/kinkyDisabled.png'
import kinkyHover from '../assets/weirds/kinkyHover.png'

import caio from '../assets/team/caio.png'
import breno from '../assets/team/breno.png'
import gabriel from '../assets/team/gabriel.png'

import conceptImage from '../assets/concept.png'
import brand from '../assets/brand.png'
import roadmap from '../assets/roadmap.png'

export default function Home() {
  const team = [
    {
      photo: caio,
      name: 'CAIO GRILO',
      role: 'CCO / Co-founder ',
    },
    {
      photo: breno,
      name: 'BRENO MAZZA',
      role: 'CEO / Co-founder ',
    },
    {
      photo: gabriel,
      name: 'GABRIEL SALOMÃO',
      role: 'COO / Co-founder ',
    },
  ]

  const characters = [
    {
      name: 'Gulp',
      title: 'The Big Friend',
      band: 'Weirds',
      musicGenre: 'All',
      role: 'Rhythm',
      disabledImage: gulpDisabled,
      hoverImage: gulpHover,
    },
    {
      name: 'Sneeze "Z"',
      title: 'The Enthusiastic Bighead',
      band: 'Weirds',
      musicGenre: 'All',
      role: 'Melody',
      disabledImage: sneezeDisabled,
      hoverImage: sneezeHover,
    },
    {
      name: 'LADY KINKY',
      title: 'The Enigmatic Figure',
      band: 'Weirds',
      musicGenre: 'All',
      role: 'Harmony',
      disabledImage: kinkyDisabled,
      hoverImage: kinkyHover,
    },
  ]

  const coreItems = [
    {
      title: 'CARTOON',
      disabledImg: palletGray,
      hoverImg: palletGradient,
      description:
        'The story of the Weird Band characters will be told in a variety of ways, including comics, clips and animated videos. You can follow along and be a part of it!',
    },
    {
      title: 'MUSIC',
      disabledImg: noteGray,
      hoverImg: noteGradient,
      description:
        'Everything in Weird Band revolves around music. Our characters form authored digital bands with original compositions, and even the NFTs have sounds!',
    },
    {
      title: 'GAMES',
      disabledImg: controlGray,
      hoverImg: controlGradient,
      description:
        'Players will test their rhythmic and musical skills in the Weird Band rhythm game. You can combine your different Weirds to form the coolest band in the universe!',
    },
  ]

  const headerNav = [
    { label: 'HOME', href: '#' },
    { label: 'MINT', href: '#' },
    { label: 'WEIRD PAPER', href: '#' },
  ]

  return (
    <div className="max-w-screen w-full min-h-screen bg-purple600 text-white bg-notes bg-bottom bg-no-repeat">
      <div className="w-full bg-purple400/70 fixed z-20">
        <header className="max-w-[1120px] w-full mx-auto flex items-center justify-between py-5">
          <Image src={logo} alt="Werids logo" />
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
      <section className="max-w-screen w-full bg-trees bg-no-repeat bg-cover bg-top h-[898px]">
        <div className="max-w-[1120px] w-full mx-auto flex items-center justify-between pt-[178px]">
          <div className="w-[452px] flex flex-col">
            <h1 className="text-[5rem] font-black font-grandstander leading-none">
              WELCOME TO WEIRD BAND!
            </h1>
            <p className="text-[1.25rem]">
              Each weird character entitles you to be part of an intergalactic
              adventure full of music. Make your own Weird Band and be a Weirdo!
            </p>
            <button className="text-white font-bold py-2 px-8 rounded-[60px] bg-green500 w-[190px] mt-4">
              MINT NOW!
            </button>
          </div>
          <Image width={541} height={491} src={heroImg} alt="" />
        </div>
      </section>
      <section className="-mt-24 max-w-screen w-full">
        <div className="max-w-[1140px] w-full mx-auto">
          <div className="w-full flex flex-col">
            <div className="w-[680px] mx-auto text-center">
              <h1 className="font-grandstander font-black uppercase text-[4.35rem] leading-none">
                PROJECT CORE
              </h1>
              <p className="text-[1.25rem] mt-4">
                Weird Band is an intellectual property that combines cartoon,
                music and game into a unique Web3 experience.
              </p>
            </div>
            <div className="w-full flex justify-between mt-14">
              {coreItems.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="w-[340px] px-10 pt-[54px] pb-16 rounded-[72px] border border-transparent bg-purple800/30 flex flex-col items-center group hover:cursor-pointer hover:bg-transparent hover:border-white transition duration-500"
                  >
                    <h1 className="text-[2.5rem] font-grandstander font-black text-white opacity-50 group-hover:opacity-100">
                      {item.title}
                    </h1>
                    <Image
                      className="group-hover:hidden"
                      src={item.disabledImg}
                      width={192}
                      height={174}
                      alt=""
                    />
                    <Image
                      className="hidden group-hover:block"
                      src={item.hoverImg}
                      width={192}
                      height={174}
                      alt=""
                    />
                    <p className="w-[274px] text-[1.25rem] text-center font-light mt-4 opacity-50 group-hover:opacity-100">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="w-full m-9 flex justify-between items-center">
            <div className="max-w-[470px] w-full flex flex-col">
              <h1 className="font-grandstander font-black text-[4.35rem] text-left leading-none">
                TRUE OWNERSHIP
              </h1>
              <div className="flex flex-col gap-6 text-[1.25rem] mt-9">
                <p>
                  Weird Band is a community-based Web3 project. All WEIRD
                  characters can be obtained as NFTs.
                </p>
                <p>
                  Each WEIRD character has a unique set of sounds associated
                  with them, which together with their personalities, give them
                  a unique identity.
                </p>
                <strong className="font-bold">
                  Each character also has a predefined supply!
                </strong>
              </div>
            </div>
            <Image
              width={483}
              height={608}
              src={kinkyOwnership}
              alt="Kinky with security shield at hers side"
            />
          </div>
        </div>
      </section>
      <section className="max-w-screen w-full bg-brand bg-fit bg-center bg-no-repeat 2xl:bg-cover">
        <div className="max-w-screen w-full bg-purple500/50">
          <div className="max-w-[1108px] w-full mx-auto py-[88px]">
            <div className="w-full mx-auto flex flex-col items-center">
              <h1 className="font-grandstander font-black text-[4.35rem]">
                Meet the first characters
              </h1>
              <div className="w-full flex justify-between mt-16">
                {characters.map((char) => {
                  return (
                    <div
                      className="w-[340px] h-[520px] px-8 pt-6 pb-8 rounded-[72px] border border-transparent bg-[#09071E]/30 flex flex-col items-center group hover:cursor-pointer hover:bg-transparent hover:border-white transition duration-500"
                      key={char.name}
                    >
                      <Image
                        width={276}
                        height={280}
                        className="group-hover:hidden"
                        src={char.disabledImage}
                        alt=""
                      />
                      <Image
                        width={368}
                        height={365}
                        className="hidden group-hover:block group-hover:-translate-y-16 scale-150"
                        src={char.hoverImage}
                        alt=""
                      />
                      <div className="w-[274px] text-[1.25rem] text-center font-light mt-4 opacity-50 group-hover:opacity-100">
                        <h1 className="text-[2.5rem] font-grandstander font-black text-white leading-none">
                          {char.name}
                        </h1>
                        <strong className="font-bold text-[1.35rem] uppercase">
                          {char.title}
                        </strong>
                        <ul>
                          <li>Band: {char.band}</li>
                          <li>Music Genre: {char.musicGenre}</li>
                          <li>Role: {char.role}</li>
                        </ul>
                      </div>
                    </div>
                  )
                })}
              </div>
              <button className="text-white text-2xl font-bold py-2 px-8 rounded-[60px] bg-green500 w-[354px] mt-16 hover:bg-opacity-80 transition duration-500">
                Check our NFTs
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen w-full bg-space bg-no-repeat h-[1000px] bg-center relative">
        <div className="max-w-[428px] w-full absolute bottom-48 right-1/2 left-1/2 translate-x-1/2">
          <h1 className="font-grandstander font-black text-[4.35rem] uppercase leading-none">
            Weird Places
          </h1>
          <div className="w-full mt-5 text-[1.25rem] flex flex-col gap-6">
            <p>
              The Places are different backgrounds and important key points in
              the history of the Weirds. You can combine places to see your
              Weirds playing together.
            </p>
            <p>
              When revealing your NFT, you have a 1% chance to find a Weird
              Place, a higher rarity background. Are you lucky?
            </p>
          </div>
          <button className="text-white text-2xl font-bold py-2 px-8 rounded-[60px] bg-green500 w-[354px] mt-4 hover:bg-opacity-80 transition duration-500">
            Are you luck?
          </button>
        </div>
      </section>
      <section className="max-w-screen w-full bg-brand bg-fit bg-center bg-no-repeat 2xl:bg-cover h-[1000px]">
        <div className="max-w-[1148px] w-full mx-auto">
          <div className="w-full flex flex-col items-center py-12 text-center">
            <h1 className="font-grandstander font-black text-[4.35rem]">
              Game
            </h1>
            <p className="mt-3 text-[1.25rem] w-[848px]">
              Soon you`ll be able to combine your Weirds to create a band in the
              Weird Band Rhythm Game. Carve your way to fame and compete for
              awesome prizes in our 1st game!
            </p>
            <Image className="w-full" src={conceptImage} alt="Game concept" />
            <footer>
              <span className="text-[1.25rem]">
                *Splash art to display the concept. Not actual game footage.
              </span>
            </footer>
          </div>
        </div>
      </section>
      <section className="max-w-screen w-full bg-purple600">
        <div className="max-w-[1148px] w-full mx-auto flex flex-col items-center py-20">
          <div>
            <h1 className="font-grandstander font-black text-[4.35rem] text-center">
              Roadmap
            </h1>
            <p className="text-[1.25rem]">
              See the next steps on our Weird Roadmap!
            </p>
          </div>
          <Image className="mt-6" src={roadmap} alt="" />
        </div>
      </section>
      <section className="max-w-screen w-full bg-[#17124E] py-24">
        <div className="max-w-[1112px] w-full mx-auto flex flex-col items-center">
          <h1 className="font-grandstander font-black text-[4.35rem] text-center">
            Team
          </h1>
          <p className="text-[1.25rem]">
            Most WEIRD team (or band, we don`t know) in the universe!
          </p>
          <div className="w-full flex justify-between mt-14">
            {team.map((member) => {
              return (
                <div
                  className="group relative h-[380px] w-[344px] cursor-pointer"
                  key={member.name}
                >
                  <Image
                    className="group-hover:opacity-30"
                    src={member.photo}
                    alt=""
                  />
                  <div className="hidden group-hover:flex absolute left-12 right-12 top-24 flex-col items-center gap-4 text-center">
                    <h1 className="text-[3.15rem] uppercase font-extrabold leading-none">
                      {member.name}
                    </h1>
                    <span className="text-[1.25rem] font-extrabold">
                      {member.role}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="max-w-screen w-full bg-beach bg-fit 2xl:bg-cover bg-no-repeat h-[400px]">
        <div className="max-w-[1026px] w-full mx-auto flex justify-between items-center py-10">
          <div className="max-w-[600px] w-full flex flex-col">
            <h1 className="font-grandstander font-extrabold text-[3.15rem] leading-none">
              MEET N`MINT
            </h1>
            <div className="mt-3 flex flex-col gap-5 text-[1.25rem] text-[#005629]">
              <p>
                Weird Band is unlike anything you`ve ever seen. And it came to
                stay! Meet the project and see for yourself!
              </p>
              <p>
                Afterwards, come back here and click the button to Mint your
                first NFT weird character.
              </p>
              <footer>
                <span className="text-lg">
                  *Only users on the Whitelist will be able to Mint.
                </span>
              </footer>
            </div>
          </div>
          <button className="text-[3.15rem] font-extrabold text-white bg-yellow500 hover:bg-yellow600 transition duration-500 rounded-[42px] w-[360px] py-2">
            MINT NOW
          </button>
        </div>
      </section>
      <section>{/* FAQ WILL COME HERE */}</section>
      <footer>
        <div>
          <div>
            <p>Privacy Policy</p>
            <p>
              Privacy Policy Your privacy is important to us. It is WEIRD BAND`s
              policy to respect your privacy regarding any information we may
              collect from you across our website, WEIRD BAND, and other sites
              we own and operate.
            </p>
            <p>
              We only ask for personal information when we truly need it to
              provide a service to you. We collect it by fair and lawful means,
              with your knowledge and consent. We also let you know why we’re
              collecting it and how it will be used.
            </p>
            <p>
              We only retain collected information for as long as necessary to
              provide you with your requested service. What data we store, we’ll
              protect within commercially acceptable means to prevent loss and
              theft, as well as unauthorised access, disclosure, copying, use or
              modification.
            </p>
            <p>
              We don’t share any personally identifying information publicly or
              with third-parties, except when required to by law. Our website
              may link to external sites that are not operated by us.
            </p>
            <p>
              Please be aware that we have no control over the content and
              practices of these sites, and cannot accept responsibility or
              liability for their respective privacy policies.
            </p>
          </div>
          <div>
            <span>weirdband@2023</span>
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
            <Image src={brand} alt="Weird brand logo" />
          </div>
        </div>
      </footer>
    </div>
  )
}
