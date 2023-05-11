import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBar from './Components/UI/Topbar'
import theme from './utils/theme'
import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import FooterBar from './Components/UI/footerbar'
import { CssBaseline } from '@mui/material'

import Homepage from './pages/Homepage'

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{
            width: '100vw',
            height: '100vh',
            backgroundColor: 'background.default'
          }}>
            <TopBar />
            <Box sx={{
              margin: '25px, 25px 55px 25px',
              padding: '25px'
            }}>

              <Routes>
                <Route path='/' element={<Homepage />} />
              </Routes>
              </Box>
              <FooterBar />
            </Box>
        </ThemeProvider>
      </BrowserRouter >
    </>
  )
}

export default App