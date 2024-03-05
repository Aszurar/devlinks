import * as TooltipUI from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

export type SideProps = 'top' | 'right' | 'bottom' | 'left' | undefined

type LinkButtonProps = {
  label: string
  side?: SideProps
  asChild?: boolean
  children: ReactNode
}

export function Tooltip({
  label,
  side = 'top',
  children,
  asChild = false,
}: LinkButtonProps) {
  return (
    <TooltipUI.Provider>
      <TooltipUI.Root>
        <TooltipUI.Trigger asChild={asChild}>{children}</TooltipUI.Trigger>
        <TooltipUI.Portal>
          <TooltipUI.Content
            side={side}
            sideOffset={5}
            className={`box-shadow-tooltip rounded-md border 
              border-stroke-light bg-surface-hover-light px-3 py-1.5 text-xs
              font-medium text-black backdrop-blur-md transition-all 
              duration-[200ms] animate-opacity dark:border-stroke-dark
              dark:bg-surface-hover-dark dark:text-white
            `}
            aria-label="."
          >
            {label}
            <TooltipUI.Arrow
              className={`fill-stroke-light  dark:fill-stroke-dark`}
            />
          </TooltipUI.Content>
        </TooltipUI.Portal>
      </TooltipUI.Root>
    </TooltipUI.Provider>
  )
}
