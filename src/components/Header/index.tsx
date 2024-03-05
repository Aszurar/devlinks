import { Tag } from '../Tag'
import { Switch } from '../Switch'
import { IconButton } from '../IconButton'
import { useTheme } from '../../hook/useTheme'

import GitHubLightSVG from '../../assets/icons/socials/github-light.svg'
import LinkedInLightSVG from '../../assets/icons/socials/linkedIn-light.svg'
import InstagramLightSVG from '../../assets/icons/socials/instagram-light.svg'
import FacebookLightSVG from '../../assets/icons/socials/facebook-light.svg'

import GitHubDarkSVG from '../../assets/icons/socials/github-dark.svg'
import LinkedInDarkSVG from '../../assets/icons/socials/linkedIn-dark.svg'
import InstagramDarkSVG from '../../assets/icons/socials/instagram-dark.svg'
import FacebookDarkSVG from '../../assets/icons/socials/facebook-dark.svg'

import ProfileIMG from '../../assets/imgs/Lucas.png'

const isSocialsDarkIcons = {
  true: {
    gitHub: GitHubDarkSVG,
    linkedIn: LinkedInDarkSVG,
    facebook: FacebookDarkSVG,
    instagram: InstagramDarkSVG,
  },
  false: {
    gitHub: GitHubLightSVG,
    linkedIn: LinkedInLightSVG,
    facebook: FacebookLightSVG,
    instagram: InstagramLightSVG,
  },
}

export function Header() {
  const { isDarkMode } = useTheme()

  const socialsIcons = isSocialsDarkIcons[`${isDarkMode}`]

  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <div className="mb-2 flex flex-col items-center gap-2 text-center">
        <div
          className={`overflow-hidden rounded-full border border-stroke-light
             bg-purple-500 pt-0.5
              dark:border-stroke-dark dark:bg-purple-500
            `}
        >
          <img
            src={ProfileIMG}
            alt="Lucas de Lima"
            className={`h-28 w-28 object-cover object-top`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-base text-black dark:text-white">
            Lucas de Lima
          </h1>
          <span
            className={`flex flex-wrap items-center justify-center gap-1 text-sm 
            text-zinc-800 dark:text-zinc-200`}
          >
            Desenvolvedor<strong className="dark:text-white">web</strong> e
            <strong className="dark:text-white">mobile</strong>com
            <Tag
              label="React"
              variant="react"
              link="https://pt-br.react.dev/"
            />
            ,
            <Tag
              label="React Native"
              variant="reactNative"
              link="https://reactnative.dev/"
            />
            &
            <Tag
              label="TypeScript"
              variant="typescript"
              link="https://www.typescriptlang.org/pt/"
            />
            .
          </span>
        </div>
      </div>

      <Switch />

      <nav className="flex gap-4 ">
        <IconButton
          icon={socialsIcons.gitHub}
          label="Acessar GitHub"
          link="https://github.com/Aszurar"
        />
        <IconButton
          icon={socialsIcons.linkedIn}
          label="Acessar LinkedIn"
          link="https://www.linkedin.com/in/lucas-de-lima-azsura/"
        />

        <IconButton
          icon={socialsIcons.facebook}
          label="Acessar Facebook"
          link="https://www.facebook.com/lucas.delima.549436"
        />
        <IconButton
          icon={socialsIcons.instagram}
          link="https://www.instagram.com/lucazura/"
          label="Acessar Instagram"
        />
      </nav>
    </header>
  )
}
