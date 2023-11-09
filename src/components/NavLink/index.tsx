import { ComponentProps } from "react"

type NavLinkProps = ComponentProps<"a">

export function NavLink({ children, ...rest }: NavLinkProps) {
  return (
    <a {...rest}
      className="h-14 rounded-lg bg-surface-normal flex items-center justify-center w-full text-center px-4 hover:bg-surface-strong border border-stroke hover:border-0.375 hover:border-white cursor-pointer transition-200ms"
    >
      <span className="text-base text-white">
        {children}
      </span>
    </a>

  )
}