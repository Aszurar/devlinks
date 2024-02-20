import { ITheme, THEME } from '../../dto/theme'
import { DEV_LINKS_ASZURAR_THEME } from '../storageConfig'

export function getTheme() {
  const response = localStorage.getItem(DEV_LINKS_ASZURAR_THEME)

  const theme = response ? JSON.parse(response) : THEME.light

  return theme as ITheme
}
