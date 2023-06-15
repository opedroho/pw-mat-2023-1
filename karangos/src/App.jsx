import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBar from './components/ui/TopBar'
import theme from './utils/theme'
import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import FooterBar from './components/ui/FooterBar'
import CssBaseline from '@mui/material/CssBaseline'

import Homepage from './pages/Homepage'
import CustomersList from './pages/CustomersList'
import CustomersForm from './pages/CustomersForm'
import CarsList from './pages/CarsList'
import CarsForm from './pages/CarsForm'
import ImgMediaCard from './pages/CardDono';

function App() {
  return (
    <>
      <BrowserRouter> {/* Componente para envolver as rotas */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ 
            width: '100vw', 
            minHeight: '100vh', 
            backgroundColor: 'background.default' 
          }}>
            <TopBar />
            <Box sx={{
              margin: '25px 25px 55px 25px'
            }}>

              <Routes>                                                          {/* Componente para definir as rotas */}
                <Route path="/" element={ <Homepage /> } />                     {/* Rota para a página inicial */}
                <Route path="/customers" element={ <CustomersList /> } />       {/* Rota para a lista de clientes */}
                <Route path="/customers/new" element={ <CustomersForm /> } />   {/* Rota para o formulário de criação de cliente */}
                <Route path="/customers/:id" element={ <CustomersForm /> } />   {/* Rota para o formulário de edição de cliente */}
                <Route path="/cars" element={ <CarsList /> } />                 {/* Rota para a lista de carros */}
                <Route path="/cars/new" element={ <CarsForm /> } />             {/* Rota para o formulário de criação de carro */}
                <Route path="/cars/:id" element={ <CarsForm /> } />             {/* Rota para o formulário de edição de carro */}
                <Route path="/ImgMediaCard" element={ <ImgMediaCard /> } />     {/* Rota para a pagina do autor */}  
              </Routes>

            </Box>
            <FooterBar />
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App