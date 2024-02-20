import * as Tooltip from '@radix-ui/react-tooltip'
type IconButtonProps = {
  icon: string
  link: string
  label: string
}

export function IconButton({ icon, link, label }: Readonly<IconButtonProps>) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <a
            href={link}
            target="_blank"
            aria-label={label}
            rel="noreferrer"
            className={`dark:hover:bg-highlight-dark hover:bg-highlight-light flex h-10 
            w-10 cursor-pointer items-center 
            justify-center rounded-full transition-200ms`}
          >
            <img src={icon} alt="" className="h-6 w-6" />
          </a>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side="bottom"
            className={` animate-opacity box-shadow-tooltip 
              rounded-md bg-white px-3 py-1.5 text-xs font-medium 
               transition-all duration-[200ms]
              dark:bg-surface-normal dark:text-white
          `}
          >
            {label}
            <Tooltip.Arrow className="dark:fill-surface-normal" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
