import { motion } from 'framer-motion'
import Sun from '../../assets/icons/theme/sun.svg'
import MoonStars from '../../assets/icons/theme/moonstars.svg'
import { useTheme } from '../../hook/useTheme'
import { SideProps, Tooltip } from '../Tooltip'

const SPRING_ANIMATION = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

export function Switch() {
  const { isDarkMode, handleToggleTheme } = useTheme()

  const lightModeIcon = {
    icon: MoonStars,
    tooltipSide: 'right' as SideProps,
    label: 'Tema escuro',
  }

  const darkModeIcon = {
    icon: Sun,
    tooltipSide: 'left' as SideProps,
    label: 'Tema claro',
  }

  const { icon, label, tooltipSide } = isDarkMode ? lightModeIcon : darkModeIcon

  return (
    <div className="h-6 w-16">
      <div
        data-theme={isDarkMode}
        className={`group relative flex h-6 w-16 items-center rounded-full border 
          border-stroke-light bg-surface-light dark:border-stroke-dark 
          dark:bg-surface-dark`}
      >
        <Tooltip label={label} side={tooltipSide} asChild>
          <motion.div
            role="button"
            layout
            aria-label={label}
            onClick={handleToggleTheme}
            transition={SPRING_ANIMATION}
            className={`absolute 
            flex items-center justify-center
            rounded-full  border-8 border-transparent
            transition-colors duration-500 hover:cursor-pointer 
            hover:border-highlight-light group-data-[theme=false]:-left-2.5 
            group-data-[theme=true]:-right-2.5
            dark:hover:cursor-pointer
            dark:hover:border-8 dark:hover:border-highlight-dark
          `}
          >
            <img
              src={icon}
              alt=""
              className="h-8 w-8 rounded-full bg-white p-2"
            />
          </motion.div>
        </Tooltip>
      </div>
    </div>
  )
}
