import { Tag } from '../Tag'
import { Switch } from '../Switch'
import { IconButton } from '../IconButton'
import { useTheme } from '../../hook/useTheme'

import GitHubLightSVG from '../../assets/icons/socials/gitHub-light.svg'
import LinkedInLightSVG from '../../assets/icons/socials/linkedIn-light.svg'
import InstagramLightSVG from '../../assets/icons/socials/instagram-light.svg'
import FacebookLightSVG from '../../assets/icons/socials/facebook-light.svg'

import GitHubDarkSVG from '../../assets/icons/socials/gitHub-dark.svg'
import LinkedInDarkSVG from '../../assets/icons/socials/linkedIn-dark.svg'
import InstagramDarkSVG from '../../assets/icons/socials/instagram-dark.svg'
import FacebookDarkSVG from '../../assets/icons/socials/facebook-dark.svg'

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
      <div className="flex flex-col items-center gap-2 text-center">
        <img
          src="https://avatars.githubusercontent.com/u/64987824?v=4"
          alt="Lucas de Lima"
          className="border-stroke h-28 w-28 rounded-full border object-cover"
        />

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

      <Switch />
    </header>
  )
}
