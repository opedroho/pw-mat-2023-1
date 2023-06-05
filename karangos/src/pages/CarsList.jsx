import React from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom'

export default function CarsList() {
  // Criando variavel de estado com o objeto vazio car
  const [state, setState] = React.useState({
      car: {}
  })

  // Desestruturando as variáveis de estado
  const {
      car
  } = state

  // Este useEffect() será executado apenas uma vez, durante o
  // carregamento da página
  React.useEffect(() => {
    loadData()    // Carrega dos dados do back-end
  }, [])

  async function loadData() {
    try {
      const result = await fetch('https://api.faustocintra.com.br/cars')

      // Requisição OK
      if(result.ok) setState({...state, car: await result.json()})
      
      // Requisição com erro
      else throw new Error(`[HTTP ${result.status}] ${result.statusText}`)

    }
    catch(error) {
      // Exibimos o erro no console
      console.error(error)
    }
  }

  const columns = [
      // Configuração das colunas da tabela de dados
      // Cada objeto representa uma coluna
      // field: o campo no objeto de dados
      // headerName: o cabeçalho da coluna na tabela
      // align: alinhamento do conteúdo da coluna
      // headerAlign: alinhamento do cabeçalho da coluna
      // width: largura da coluna
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'brand',
      headerName: 'Marca',
      align: 'center',
      headerAlign: 'center',
      width: 150
    },
    {
      field: 'model',
      headerName: 'Modelo',
      align: 'center',
      headerAlign: 'center',
      width: 150
    },
    {
      field: 'color',
      headerName: 'Cor',
      align: 'center',
      headerAlign: 'center',
      width: 150
    },
    {
      field: 'year_manufacture',
      headerName: 'Ano de fabricação.',
      align: 'center',
      headerAlign: 'center',
      width: 150,
    },
    {
      field: 'imported',
      headerName: 'Importado',
      align: 'center',
      headerAlign: 'center',
      width: 150,
      // Esta função faz com que os 0 e 1, sejam representados como Não e Sim
      valueGetter: params => {
        if(params.value == 1) return 'Sim'
        else return 'Não'
      }
    },
    {
      field: 'plates',
      headerName: 'Placas',
      align: 'center',
      headerAlign: 'center',
      width: 150
    },
    {
      field: 'selling_price',
      headerName: 'Preço de venda',
      align: 'center',
      headerAlign: 'center',
      width: 150
    },
    {
      field: 'edit',
      headerName: 'Editar',
      headerAlign: 'center',
      align: 'center',
      width: 90,
      // Renderização personalizada para exibir um botão de edição
      renderCell: params =>
        <Link to={'./' + params.id}>
          <IconButton aria-label="Editar">
            <EditIcon />
          </IconButton>
        </Link> 
    },
    {
      field: 'delete',
      headerName: 'Excluir',
      headerAlign: 'center',
      align: 'center',
      width: 90,
      // Renderização personalizada para exibir um botão de exclusão
      renderCell: params =>
        <IconButton 
          aria-label="Excluir"
          onClick={() => handleDeleteButtonClick(params.id)}
        >
          <DeleteForeverIcon color="error" />
        </IconButton>
    }
  ];
  // Criando função para deletar itens
  async function handleDeleteButtonClick(id) {
    if(confirm('Deseja realmente excluir este item?')) {
      try {
        // Faz a chamada ao back-end para excluir o cliente
        const result = await fetch(`https://api.faustocintra.com.br/cars/${id}`, {
          method: 'DELETE'
        })
        // Se a exclusão tiver sido feita com sucesso, atualiza a listagem
        if(result.ok) loadData()
        alert('Exclusão efetuada com sucesso!')
      }
      catch(error) {
        console.error(error)
      }
    }
  }
  
  return (
    <>
      <Typography variant="h1" sx={{ mb: '50px' }}>
        Listagem de Carros
      </Typography>

      <Box sx={{
        display: 'flex',
        justifyContent: 'right',
        mb: '25px'  // margin-bottom
      }}>
        {/* Link para a página de cadastro de um novo carro */}
        <Link to="new">
          <Button 
            variant="contained" 
            color="secondary"
            size="large"
            startIcon={<AddBoxIcon />}
          >
            Cadastrar novo Carro
          </Button>
        </Link>
      </Box>
      
      <Paper elevation={4} sx={{ height: 400, width: '100%' }}>
        {/* Tabela de dados usando o componente DataGrid do Material-UI */}
        <DataGrid
          rows=   {car}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Paper>
    </>
  )
}