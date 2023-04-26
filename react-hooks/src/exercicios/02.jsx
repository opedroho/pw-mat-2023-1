import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 inicialize o estado como o valor do localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  
  // Lazy initializer ("atualização preguiçosa")
  // Faz com que o valor inicial de um useState só seja executado
  // durante a fase de carregamento do componente (fase "mount")
  // Para ativar um lazy initializer, basta informar uma função
  // como valor inicial do useState
  const [name, setName] = React.useState(
    () => {
      console.count('Carregou')
      return window.localStorage.getItem('name') ?? initialName
    }
  )

  const [count, setCount] = React.useState(0)

  // 🐨 Aqui é onde usamos `React.useEffect`.
  // A função deve armazenar `name` no localStorage.
  // 💰 window.localStorage.setItem('name', name)

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
    console.count('Atualizou')
  }, [name]) // --> Vetor de dependências
  // O useEffect somente será executado quando a(s) variável(is)
  // especificadas no vetor de dependências tiverem seus valores alterados

  function handleChange(event) {
    setName(event.target.value)
  }

  function handleClick(event) {
    setCount(count + 1)
  }

  return (
    <div>
      <form>
        <label htmlFor="name" onClick={handleClick}>Name ({count}): </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}

function Exercicio02() {
  return <Greeting initialName="Orkutilson" />
}

export default Exercicio02