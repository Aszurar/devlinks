import './styles/global.css'

import { NavLink } from './components/NavLink'
import { Header } from './components/Header'
import { ThemeProvider } from './context/theme'

function App() {
  return (
    <ThemeProvider>
      <div
        className={` flex 
          min-h-screen flex-col items-center 
          justify-center bg-[url('/imgs/background-mb-light.png')] bg-cover  
          bg-center bg-no-repeat py-0
          antialiased dark:bg-[url('/imgs/background-mb-dark.png')]
          sm:justify-start sm:bg-[url('/imgs/background-light.png')] sm:py-14 
          sm:dark:bg-[url('/imgs/background-dark.png')]`}
      >
        <div
          className="flex w-full max-w-md flex-col items-center gap-6 p-6 
          text-white"
        >
          <Header />

          <main className="flex w-full flex-1 flex-col items-center gap-1 ">
            <h2 className="text-lg text-black dark:text-white">
              Projetos desenvolvidos
            </h2>
            <div className="flex w-full flex-1 gap-4">
              <section className="flex flex-1 flex-col items-center gap-4 ">
                <span className="text-zinc-700 dark:text-zinc-100">Mobile</span>
                <NavLink href="https://caule.app/">Caule</NavLink>
                <NavLink href="https://play.google.com/store/apps/details?id=com.usinalins.appcolaborador&hl=en">
                  Lins Agro
                </NavLink>
                <NavLink href="https://play.google.com/store/apps/details?id=com.usinagoianesia.boletimmobile&hl=en">
                  Usina Goianésia
                </NavLink>
                <NavLink
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.buscadordizerodireito.app&hl=pt_BR&gl=US"
                >
                  Dizer o direito
                </NavLink>
                <NavLink href="https://play.google.com/store/apps/details?id=com.nanoincub.comidanahora&hl=pt_BR&gl=US">
                  Comida na hora
                </NavLink>
                <NavLink href="https://play.google.com/store/apps/details?id=com.icodsmobile&hl=en_US&gl=US">
                  Icods
                </NavLink>
              </section>
              <section className="flex flex-1 flex-col items-center gap-4">
                <span className="text-zinc-700 dark:text-zinc-100">web</span>
                <NavLink href="https://dtmoney-aszurar.netlify.app">
                  dtmoney
                </NavLink>

                <NavLink href="https://ignite-timer-aszurar.netlify.app">
                  Ignite Timer
                </NavLink>
                <NavLink href="https://tailwindcss-app.vercel.app">
                  Tailwindcss App
                </NavLink>
                <NavLink href="https://todo-aszurar.netlify.app">to.do</NavLink>
                <NavLink href="https://lucas-de-lima-ms.netlify.app/">
                  devlinks
                </NavLink>
                <NavLink href="https://github.com/Aszurar/AniList">
                  AniList
                </NavLink>
              </section>
            </div>
          </main>

          <footer className="flex w-full flex-col items-center justify-center gap-4 text-sm">
            <p className="text-zinc-700 dark:text-zinc-200">
              Feito com ♥ por{' '}
              <span className="text-black underline dark:text-white">
                Lucas de Lima
              </span>
            </p>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
