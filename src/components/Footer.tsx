import Image from 'next/image'
import Link from 'next/link'

import discordIcon from '@/assets/discord.svg'
import twitterLogo from '@/assets/twitter.svg'
import brand from '@/assets/brand.png'

export function Footer() {
  return (
    <footer className="max-w-screen w-full bg-purple300 py-9 text-white">
      <div className="max-w-[1120px] w-full mx-auto flex justify-between items-center">
        <div className="max-w-[612px] w-full text-[0.65rem]">
          <p className="italic">Privacy Policy</p>
          <div className="flex flex-col">
            <p className="italic">
              Privacy Policy Your privacy is important to us. It is WEIRD BAND`s
              policy to respect your privacy regarding any information we may
              collect from you across our website, WEIRD BAND, and other sites
              we own and operate.
            </p>
            <p className="italic">
              We only ask for personal information when we truly need it to
              provide a service to you. We collect it by fair and lawful means,
              with your knowledge and consent. We also let you know why we’re
              collecting it and how it will be used.
            </p>
            <p className="italic">
              We only retain collected information for as long as necessary to
              provide you with your requested service. What data we store, we’ll
              protect within commercially acceptable means to prevent loss and
              theft, as well as unauthorised access, disclosure, copying, use or
              modification.
            </p>
            <p className="italic">
              We don’t share any personally identifying information publicly or
              with third-parties, except when required to by law. Our website
              may link to external sites that are not operated by us.
            </p>
            <p className="italic">
              Please be aware that we have no control over the content and
              practices of these sites, and cannot accept responsibility or
              liability for their respective privacy policies.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">weirdband@2023</span>
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
        <Image src={brand} alt="Weird brand logo" />
      </div>
    </footer>
  )
}
