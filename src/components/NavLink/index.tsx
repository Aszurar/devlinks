import { ComponentProps } from 'react'

type NavLinkProps = ComponentProps<'a'>

export function NavLink({ children, ...rest }: NavLinkProps) {
  return (
    <a
      target="_blank"
      className={`dark:border-stroke-dark dark:bg-surface-dark 
        border-stroke-light bg-surface-light 
        hover:bg-surface-hover-light dark:hover:bg-surface-hover-dark flex h-14 w-full 
        cursor-pointer items-center justify-center gap-2  rounded-lg border 
        bg-surface-normal  px-4 text-center transition-colors
        duration-500 hover:border-0.375 hover:border-black
        dark:hover:border-white
        `}
      {...rest}
    >
      <span className="text-base text-black dark:text-white">{children}</span>
    </a>
  )
}
