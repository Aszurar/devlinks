export function Header() {
  return (
    <header className="flex flex-col items-center text-center gap-2">
      <img
        src="https://media.licdn.com/dms/image/C4E03AQFRhzWWnOBKaA/profile-displayphoto-shrink_200_200/0/1656444248841?e=1704931200&v=beta&t=oqFgbyO1W6PjdC9Rgwr7pMd1AV3nh314PFCZTFg0MSQ"
        alt="Lucas de Lima"
        className="rounded-full w-28 h-28 border border-stroke object-cover"
      />

      <div className="flex flex-col gap-1">
        <h1 className="text-base">Lucas de Lima</h1>
        <h2 className="flex gap-1 flex-wrap items-center justify-center text-zinc-200 text-sm">
          Desenvolvedor<strong className="text-white">web</strong> e
          <strong className="text-white ">mobile</strong>com
          <a
            href="https://pt-br.react.dev/"
            target="_blank"
            className="text-sky-400 hover:text-sky-300 hover:cursor-pointer transition-200ms font-bold"
            rel="noreferrer"
          >
            React
          </a>
          ,
          <a
            href="https://reactnative.dev/"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 hover:cursor-pointer transition-200ms font-bold"
            rel="noreferrer"
          >
            React Native
          </a>
          &
          <a
            href="https://www.typescriptlang.org/pt/"
            target="_blank"
            className="bg-blue-600 p-0.5 text-white hover:bg-blue-500  transition-200ms rounded-sm hover:cursor-pointer font-bold"
            rel="noreferrer"
          >
            TypeScript
          </a>
          .
        </h2>
      </div>
    </header>
  )
}
