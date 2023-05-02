'use client'

import Image from 'next/image'

import kinkyOwnership from '../assets/kinkyOwnership.png'

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
import roadmap from '../assets/roadmap.png'

import * as Accordion from '@radix-ui/react-accordion'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { CaretDown, X } from 'phosphor-react'

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

  const faq = [
    {
      value: 'faq1',
      question: 'What is a Weird Band?',
      paragraphs: [
        'Weird Band is an original intellectual property that combines music, cartoons and games into a unique Web3 experience.',
        'In Weird Band, the community follows a band of musical aliens that leave their home planet, where music is marginalized, looking for a place in the universe that accepts their music.',
        'Being both the instruments and instrumentalists, these weird beings will captivate humanity with the enveloping music they create with their bodies.',
      ],
      list: [],
    },
    {
      value: 'faq2',
      question: 'How to obtain Weird Band characters?',
      paragraphs: [
        'Weird Band is a community-based Web3 project. All Weird characters can be obtained as NFTs.',
        'Each character has a unique timbre and a set of sounds associated with them, which along with their personalities, give them a unique identity.',
        'The first characters: Sneeze, Gulp and Lady Kinky will be of “Legend” rarity, with a very small supply.',
        'To join the sales the user needs to be Whitelisted.',
        'Seasonally, new characters will be added with higher supply and lower rarities.',
      ],
      list: [],
    },
    {
      value: 'faq3',
      question: 'How can I get whitelisted?',
      paragraphs: ['You can get whitelists in several ways:'],
      list: [
        '- Collabs',
        '- Actively participating in our Discord',
        '- Participating and interacting frequently on Twitter',
      ],
    },
    {
      value: 'faq4',
      question: 'Is Weird Band an investment?',
      paragraphs: [
        'No. Weird Band is an original intellectual property that will be exploited in various products such as games, music videos and collectibles.',
        'Weird Band NFTs will be very useful in the Weird Band ecosystem, but they do not offer guarantees of financial returns.',
        'Weird Band characters should not be considered investments.',
      ],
      list: [],
    },
    {
      value: 'faq5',
      question: 'How to play Weird Band?',
      paragraphs: [
        'The first Weird Band Game will be a Rythm Game free to play but with the possibilit to truly own your in-game characters as NFTs. The alpha is scheduled to Q4 2023.',
      ],
      list: [],
    },
  ]

  return (
    <div className="w-full text-white lg:bg-notes bg-no-repeat bg-cover">
      <section className="max-w-screen w-full lg:bg-trees bg-no-repeat bg-cover bg-top h-[898px] px-6 lg:px-0">
        <div className="max-w-[393px] lg:max-w-[1120px] w-full mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-0 justify-between pt-36 lg:pt-[178px]">
          <div className="w-[245px] lg:w-[452px] flex flex-col">
            <h1 className="text-[2rem] lg:text-[5rem] font-black font-grandstander leading-none">
              WELCOME TO WEIRD BAND!
            </h1>
            <p className="text-sm lg:text-[1.25rem] leading-snug mt-2 lg:mt-0">
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
        <div className="max-w-fit lg:max-w-[1140px] w-full mx-auto">
          <div className="w-full flex flex-col">
            <div className="w-[343px] lg:w-[680px] mx-auto text-center px-6 lg:px-0">
              <h1 className="font-grandstander font-black uppercase text-[2rem] lg:text-[4.35rem] leading-none">
                PROJECT CORE
              </h1>
              <p className="text-sm lg:text-[1.25rem] mt-2 lg:mt-4">
                Weird Band is an intellectual property that combines cartoon,
                music and game into a unique Web3 experience.
              </p>
            </div>
            <ScrollArea.Root className="w-full" type="always">
              <ScrollArea.Viewport>
                <div className="w-full flex gap-3 lg:gap-0 lg:justify-between mt-8 lg:mt-14 pl-6 pr-3 lg:pr-0">
                  {coreItems.map((item) => {
                    return (
                      <div
                        key={item.title}
                        className="w-[340px] px-10 pt-8 lg:pt-[54px] pb-8 lg:pb-16 rounded-[72px] border border-white lg:border-transparent bg-transparent lg:bg-purple800/30 flex flex-col items-center group hover:cursor-pointer hover:bg-transparent hover:border-white transition duration-500"
                      >
                        <h1 className="text-[2.5rem] font-grandstander font-black text-white lg:opacity-50 group-hover:opacity-100">
                          {item.title}
                        </h1>
                        <Image
                          className="hidden lg:block lg:group-hover:hidden"
                          src={item.disabledImg}
                          width={192}
                          height={174}
                          alt=""
                        />
                        <Image
                          className="block lg:hidden lg:group-hover:block"
                          src={item.hoverImg}
                          width={192}
                          height={174}
                          alt=""
                        />
                        <p className="leading-tight w-[274px] text-sm lg:text-[1.25rem] text-center font-light mt-4 lg:opacity-50 group-hover:opacity-100">
                          {item.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
                <ScrollArea.Scrollbar orientation="horizontal" />
              </ScrollArea.Viewport>
            </ScrollArea.Root>
          </div>
          <div className="w-full mt-[104px] flex flex-col lg:flex-row justify-between items-center">
            <div className="max-w-[303px] lg:max-w-[470px] w-full flex flex-col">
              <h1 className="font-grandstander font-black text-[2rem] lg:text-[4.35rem] text-left leading-none">
                TRUE OWNERSHIP
              </h1>
              <div className="flex flex-col gap-6 text-sm lg:text-[1.25rem] mt-2 lg:mt-9 leading-tight">
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
            <div className="w-[323px] h-[500px] lg:w-[483px] lg:h-[608px] mt-10 lg:mt-0">
              <Image
                width={483}
                height={608}
                src={kinkyOwnership}
                alt="Kinky with security shield at hers side"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen w-full bg-brand bg-fit bg-center bg-no-repeat 2xl:bg-cover">
        <div className="max-w-screen w-full bg-purple500/50">
          <div className="max-w-[393px] lg:max-w-[1108px] w-full mx-auto py-[88px]">
            <div className="w-full mx-auto flex flex-col items-center">
              <h1 className="px-8 lg:px-0 text-center font-grandstander font-black text-[2rem] lg:text-[4.35rem] leading-tight">
                Meet the first characters
              </h1>
              <ScrollArea.Root className="w-full" type="always">
                <ScrollArea.Viewport>
                  <div className="pl-6 lg:pl-0 w-full flex gap-3 lg:justify-between mt-16">
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
                  <ScrollArea.Scrollbar orientation="horizontal" />
                </ScrollArea.Viewport>
              </ScrollArea.Root>
              <button className="text-white text-2xl font-bold py-2 px-8 rounded-[60px] bg-green500 w-[354px] mt-16 hover:bg-opacity-80 transition duration-500">
                Check our NFTs
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen w-full lg:bg-space bg-no-repeat h-[500px] lg:h-[1000px] bg-center relative">
        <div className="max-w-[329px] lg:max-w-[428px] w-full absolute left-10 bottom-[104px] lg:bottom-48 lg:right-1/2 lg:left-1/2 lg:translate-x-1/2">
          <h1 className="font-grandstander font-black text-[2rem] lg:text-[4.35rem] uppercase leading-none">
            Weird Places
          </h1>
          <div className="w-full mt-5 text-sm lg:text-[1.25rem] flex flex-col gap-6">
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
          <button className="text-white text-2xl font-bold py-2 px-8 rounded-[60px] bg-green500 w-[320px] lg:w-[354px] mt-8 lg:mt-4 hover:bg-opacity-80 transition duration-500">
            Are you luck?
          </button>
        </div>
      </section>
      <section className="max-w-screen w-full bg-brand bg-fit bg-center bg-no-repeat 2xl:bg-cover h-[500px] lg:h-[1000px]">
        <div className="max-w-[393px] lg:max-w-[1148px] px-8 lg:px-0 w-full mx-auto">
          <div className="w-full flex flex-col items-center py-12 text-center">
            <h1 className="font-grandstander font-black text-[2rem] lg:text-[4.35rem]">
              Game
            </h1>
            <p className="mt-3 text-sm lg:text-[1.25rem] w-[333px] lg:w-[848px]">
              Soon you`ll be able to combine your Weirds to create a band in the
              Weird Band Rhythm Game. Carve your way to fame and compete for
              awesome prizes in our 1st game!
            </p>
            <Image className="w-full" src={conceptImage} alt="Game concept" />
            <footer>
              <span className="text-[0.675rem] lg:text-[1.25rem]">
                *Splash art to display the concept. Not actual game footage.
              </span>
            </footer>
          </div>
        </div>
      </section>
      <section className="hidden lg:flex max-w-screen w-full">
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
        <div className="max-w-[393px] lg:max-w-[1112px] w-full mx-auto flex flex-col items-center">
          <h1 className="font-grandstander font-black text-[2rem] lg:text-[4.35rem] text-center">
            Team
          </h1>
          <p className="w-[323px] lg:w-full text-sm lg:text-[1.25rem] text-center">
            Most WEIRD team (or band, we don`t know) in the universe!
          </p>
          <div className="hidden lg:flex w-full justify-between mt-14">
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
          <ScrollArea.Root className="w-full lg:hidden" type="always">
            <ScrollArea.Viewport>
              <div className="pl-6 pr-3 lg:pl-0 flex items-stretch w-full gap-3 mt-10">
                {team.map((member) => {
                  return (
                    <div
                      className="w-[180px] h-[260px] text-center flex flex-col gap-2"
                      key={member.name}
                    >
                      <h1 className="text-sm lg:text-[3.15rem] uppercase font-extrabold leading-none">
                        {member.name}
                      </h1>
                      <span className="text-xs lg:text-[1.25rem] font-extrabold">
                        {member.role}
                      </span>

                      <Image
                        width={180}
                        height={180}
                        src={member.photo}
                        alt=""
                      />
                    </div>
                  )
                })}
              </div>
              <ScrollArea.Scrollbar orientation="horizontal" />
            </ScrollArea.Viewport>
          </ScrollArea.Root>
        </div>
      </section>
      <section className="max-w-screen w-full bg-beach bg-fit 2xl:bg-cover bg-no-repeat h-[400px] flex items-center">
        <div className="max-w-[393px] lg:max-w-[1026px] px-8 lg:px-0 w-full mx-auto flex flex-col lg:flex-row justify-between items-center py-10">
          <div className="max-w-[323px] lg:max-w-[600px] w-full flex flex-col">
            <h1 className="font-grandstander font-extrabold text-[2rem] lg:text-[3.15rem] leading-none">
              MEET N`MINT
            </h1>
            <div className="mt-3 flex flex-col gap-5 text-sm lg:text-[1.25rem] text-[#005629]">
              <p>
                Weird Band is unlike anything you`ve ever seen. And it came to
                stay! Meet the project and see for yourself!
              </p>
              <p>
                Afterwards, come back here and click the button to Mint your
                first NFT weird character.
              </p>
              <footer>
                <span className="text-sm lg:text-lg">
                  *Only users on the Whitelist will be able to Mint.
                </span>
              </footer>
            </div>
          </div>
          <button className="mt-6 lg:mt-0 text-[2rem] lg:text-[3.15rem] font-extrabold text-white bg-yellow500 hover:bg-yellow600 transition duration-500 rounded-[42px] w-[360px] py-2">
            MINT NOW
          </button>
        </div>
      </section>
      <section className="max-w-[393px] lg:max-w-[1000px] px-8 lg:px-0 w-full mx-auto pb-[223px] pt-24">
        <div className="w-full flex flex-col items-center">
          <h1 className="font-grandstander font-black text-[2rem] lg:text-[4.35rem] uppercase leading-none">
            FAQ
          </h1>
          <p className="text-center text-sm lg:text-[1.25rem] mt-5">
            See answers to the most frequently asked questions about Weird Band!
          </p>
          <Accordion.Root type="multiple" className="mt-10 flex flex-col gap-7">
            {faq.map((item) => {
              return (
                <Accordion.Item
                  key={item.question}
                  value={item.value}
                  className="flex flex-col gap-7"
                >
                  <Accordion.Header>
                    <Accordion.Trigger>
                      <div className="text-left lg:text-center w-[329px] lg:w-[988px] bg-purple200/50 flex items-center justify-between px-4 lg:px-12 py-7">
                        <p className="font-grandstander font-black text-base lg:text-[2.25rem] uppercase leading-none">
                          {item.question}
                        </p>
                        <CaretDown size={32} weight="bold" />
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="bg-purple300 w-[329px] lg:w-[988px] px-14 py-10">
                    <header className="w-full flex justify-between items-start">
                      <span className="font-grandstander font-black text-lg lg:text-[1.85rem]">
                        {item.question}
                      </span>
                      <Accordion.Trigger>
                        <X size={28} weight="bold" />
                      </Accordion.Trigger>
                    </header>
                    <div className="flex flex-col gap-5 mt-5">
                      {item.paragraphs.map((par) => {
                        return (
                          <p className="text-sm lg:text-[1.25rem]" key={par}>
                            {par}
                          </p>
                        )
                      })}
                      {item.list ? (
                        <ul className="flex flex-col gap-1 mt-5">
                          {item.list.map((item) => {
                            return (
                              <li key={item} className="text-[1.25rem]">
                                {item}
                              </li>
                            )
                          })}
                        </ul>
                      ) : null}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              )
            })}
          </Accordion.Root>
        </div>
      </section>
    </div>
  )
}
