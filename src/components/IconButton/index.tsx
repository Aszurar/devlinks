
type IconButtonProps = {
  icon: string
  link: string
  label: string
}

export function IconButton({ icon, link, label }: Readonly<IconButtonProps>) {
  return (
    <a href={link} target="_blank" aria-label={label} className=" hover:bg-highlight transition-0.1 h-10 w-10 flex items-center justify-center rounded-md cursor-pointer">
      <img src={icon} alt="" className="h-6 w-6" />
    </a>
  )
}
