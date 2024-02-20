import { VariantProps, tv } from 'tailwind-variants'

const tagVariant = tv({
  base: `font-bold text-white rounded-md p-0.5 transition-all duration-300 
    hover:cursor-pointer`,
  variants: {
    variant: {
      react: 'bg-sky-700 brightness-125  hover:hover:brightness-150',
      reactNative: 'bg-indigo-600 hover:brightness-125',
      typescript: 'bg-blue-600 hover:bg-blue-500',
    },
  },
  defaultVariants: {
    variant: 'react',
  },
})

type TagsProps = VariantProps<typeof tagVariant> & {
  link: string
  label: string
}

export function Tag({ link, label, variant }: TagsProps) {
  return (
    <a
      href={link}
      target="_blank"
      className={tagVariant({ variant })}
      rel="noreferrer"
    >
      {label}
    </a>
  )
}
