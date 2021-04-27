import { useBrix } from 'react-brix'
import { paths } from '../paths'
import { light, dark } from '../../../theme/theme'

export const useTheme = () => {
  const [theme, setTheme] = useBrix(paths.theme.get())

  if (!theme) {
    setTheme('light')
  }

  const currentTheme = theme === 'light' ? light : dark

  return [
    currentTheme
  ]
}