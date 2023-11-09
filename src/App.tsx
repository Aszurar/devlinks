import { NavLink } from './components/NavLink'
import { Header } from './components/Header'
import './styles/global.css'

import InstagramSVG from './assets/icons/instagram.svg'
import FacebookSVG from './assets/icons/facebook.svg'
import LinkedInSVG from './assets/icons/linkedIn.svg'
import GitHubSVG from './assets/icons/gitHub.svg'
import { IconButton } from './components/IconButton'

function App() {
  return (
    <div className="bg-surface-strong min-h-screen background-full flex flex-col items-center py-14">
      <div className="max-w-md flex flex-col items-center w-full text-white p-6 gap-6">
        <Header />

        <main className="flex flex-col gap-4 flex-1 w-full">
          <section className="flex flex-col flex-1 gap-4  ">
            <NavLink>Ignite Timer</NavLink>
            <NavLink>Todo dark</NavLink>
            <NavLink>Notion Settings com Tailwind</NavLink>
            <NavLink>Veja + em meu portfolio</NavLink>
          </section>
        </main>

        <footer className="text-sm w-full flex flex-col items-center gap-4 justify-center">
          <nav className="flex gap-4 py-4">
            <IconButton
              icon={FacebookSVG}
              label="Acessar Facebook"
              link="https://www.facebook.com/lucas.delima.549436"
            />
            <IconButton
              icon={InstagramSVG}
              link="https://www.instagram.com/lucazura/"
              label="Acessar Instagram"
            />
            <IconButton
              icon={LinkedInSVG}
              label="Acessar LinkedIn"
              link="https://www.linkedin.com/in/lucas-de-lima-azsura/"
            />
            <IconButton
              icon={GitHubSVG}
              label="Acessar GitHub"
              link="https://github.com/Aszurar"
            />
          </nav>

          <p>
            Feito com ♥ por <span className="underline">Lucas de Lima</span>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
