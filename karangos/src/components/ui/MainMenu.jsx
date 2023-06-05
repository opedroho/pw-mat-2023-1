import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

export default function MainMenu() {
  // Define o estado do anchorEl para controlar o menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  // Verifica se o menu está aberto com base no valor do anchorEl
  const open = Boolean(anchorEl);
  // Função para lidar com o clique no ícone do menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Função para fechar o menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Ícone do menu */}
      <IconButton 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        edge="start" 
        color="inherit" 
        aria-label="menu" 
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      
      {/* Menu */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* Item do menu - Página inicial */}
        <MenuItem divider
          onClick={handleClose}
          component={Link}
          to="/"
        >
          Página inicial
        </MenuItem>
        
        {/* Item do menu - Clientes */}
        <MenuItem 
          onClick={handleClose}
          component={Link}
          to="/customers"
        >
          Clientes
        </MenuItem>

        {/* Item do menu - Carros */}
        <MenuItem 
          onClick={handleClose}
          component={Link}
          to="/cars"
        >
          Carros
        </MenuItem>

      </Menu>
    </div>
  );
}
