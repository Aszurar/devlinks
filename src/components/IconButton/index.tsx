import { Tooltip } from '../Tooltip'

type IconButtonProps = {
  icon: string
  link: string
  label: string
}

export function IconButton({ icon, link, label }: Readonly<IconButtonProps>) {
  return (
    <Tooltip label={label} asChild>
      <a
        href={link}
        target="_blank"
        aria-label={label}
        rel="noreferrer"
        className={`flex h-10 w-10 cursor-pointer 
            items-center justify-center rounded-full 
            transition-200ms hover:bg-highlight-light dark:hover:bg-highlight-dark`}
      >
        <img src={icon} alt="" className="h-6 w-6" />
      </a>
    </Tooltip>
  )
}
