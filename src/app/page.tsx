'use client'

import Image from 'next/image'
import Link from 'next/link'

import logo from '../assets/weirdsLogo.svg'
import kinkyOwnership from '../assets/kinkyOwnership.png'
import discordIcon from '../assets/discord.svg'
import twitterLogo from '../assets/twitter.svg'

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
      name: 'CAIO GRILO',
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
      name: 'Gulp',
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
    <div className="max-w-screen w-full min-h-screen bg-purple700 text-white">
      <div className="w-full bg-purple400/70 fixed">
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
      <section>
        <div>
          <div>
            <h1>WELCOME TO WEIRD BAND!</h1>
            <p>
              Each weird character entitles you to be part of an intergalactic
              adventure full of music. Make your own Weird Band and be a Weirdo!
            </p>
            <button>MINT NOW!</button>
          </div>
          <Image src="" alt="" />
        </div>
      </section>
      <section>
        <div>
          <div>
            <h1>PROJECT CORE</h1>
            <p>
              Weird Band is an intellectual property that combines cartoon,
              music and game into a unique Web3 experience.
            </p>
          </div>
          <div>
            {coreItems.map((item) => {
              return (
                <div key={item.title}>
                  <h1>{item.title}</h1>
                  <Image
                    src={item.disabledImg}
                    width={192}
                    height={174}
                    alt=""
                  />
                  <Image src={item.hoverImg} width={192} height={174} alt="" />
                  <p>{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h1>TRUE OWNERSHIP</h1>
            <p>
              Weird Band is a community-based Web3 project. All WEIRD characters
              can be obtained as NFTs.
            </p>
            <p>
              Each WEIRD character has a unique set of sounds associated with
              them, which together with their personalities, give them a unique
              identity.
            </p>
            <strong>Each character also has a predefined supply!</strong>
          </div>
          <Image
            src={kinkyOwnership}
            alt="Kinky with security shield at hers side"
          />
        </div>
      </section>
      <section>
        <div>
          <div>
            <h1>Meet the first characters</h1>
            <div>
              {characters.map((char) => {
                return (
                  <div key={char.name}>
                    <Image src={char.disabledImage} alt="" />
                    <Image src={char.hoverImage} alt="" />
                    <h1>{char.name}</h1>
                    <strong>{char.title}</strong>
                    <ul>
                      <li>Band: {char.band}</li>
                      <li>Music Genre: {char.musicGenre}</li>
                      <li>Role: {char.role}</li>
                    </ul>
                  </div>
                )
              })}
            </div>
            <button>Check our NFTs</button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h1>Weird Places</h1>
            <p>
              The Places are different backgrounds and important key points in
              the history of the Weirds. You can combine places to see your
              Weirds playing together.
            </p>
            <p>
              When revealing your NFT, you have a 1% chance to find a Weird
              Place, a higher rarity background. Are you lucky?
            </p>
            <button>Are you luck?</button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h1>Game</h1>
            <p>
              Soon you`ll be able to combine your Weirds to create a band in the
              Weird Band Rhythm Game. Carve your way to fame and compete for
              awesome prizes in our 1st game!
            </p>
            <Image src={conceptImage} alt="Game concept" />
            <footer>
              <span>
                *Splash art to display the concept. Not actual game footage.
              </span>
            </footer>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1>Roadmap</h1>
          <p>See the next steps on our Weird Roadmap!</p>
          <Image src={roadmap} alt="" />
        </div>
      </section>
      <section>
        <div>
          <h1>Team</h1>
          <p>Most WEIRD team (or band, we don`t know) in the universe!</p>
          <div>
            {team.map((member) => {
              return (
                <div key={member.name}>
                  <Image src={member.photo} alt="" />
                  <div>
                    <h1>{member.name}</h1>
                    <span>{member.role}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h1>MEET N`MINT</h1>
            <p>
              Weird Band is unlike anything you`ve ever seen. And it came to
              stay! Meet the project and see for yourself!
            </p>
            <p>
              Afterwards, come back here and click the button to Mint your first
              NFT weird character.
            </p>
            <footer>
              <span>*Only users on the Whitelist will be able to Mint.</span>
            </footer>
          </div>
          <button>MINT NOW</button>
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
