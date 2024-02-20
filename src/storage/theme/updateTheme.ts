import { ITheme } from '../../dto/theme'
import { DEV_LINKS_ASZURAR_THEME } from '../storageConfig'

export function updateTheme(theme: ITheme) {
  localStorage.setItem(DEV_LINKS_ASZURAR_THEME, JSON.stringify(theme))
}
