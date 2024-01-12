import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyle'
import { Sidebar } from './containers/Sidebar'
import { About } from './containers/About'
import { Projects } from './containers/Projects'
import { Container } from './globalStyle'
import { LightTheme } from './themes/light'
import { DarkTheme } from './themes/dark'
import { useState } from 'react'

function App() {
  const [themeIsDak, setThemeIsDark] = useState(false)
  function changeTeheme() {
    setThemeIsDark(!themeIsDak)
  }
  return (
    <ThemeProvider theme={themeIsDak ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar changeTheme={changeTeheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
