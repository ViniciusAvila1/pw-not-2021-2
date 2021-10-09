import * as React from 'react'
export default function Exercicio02({initialName = ''}) {
    // 🐨 initialize the state to the value from localStorage  
    // 💰 window.localStorage.getItem('name') || initialName  
    const [name, setName] = React.useState(
        // Recuperação de um valor previamente salvo no localStorage
        // ou usa o valor de initialName, caso o item do localStorage
        // não exista

        // Retornando uma função para criar um lazy initializer,
        // que é executado paenas uma vez, no carregamento inicial
        // da página

        // Ao invés de fornecer um valor, fornece uma função que
        // retorna o valor
       () => readStorage() || initialName
    )
    const [count, setCount] = React.useState(() => 0)

    function readStorage() {
        console.count('Lido localStorage')
        return window.localStorage.getItem('name')
    }
    
    // 🐨 Here's where you'll use `React.useEffect`.  
    // The callback should set the `name` in localStorage.  
    // 💰 window.localStorage.setItem('name', name)  

    // Armazenando em um item do localStorage chamado "name" o valor
    // da variável de estado name
    React.useEffect(() => {
        window.localStorage.setItem('name', name)
        setCount(count + 1)
    }, [name])
    // colocando o vetor [name], o useEffect() atualiza somente 
    // depois que a variável for alterada.

    // useEffect() tem dois parâmetros:
    // 1) É uma função que será atualizada depois de uma atualização
    // do componente
    // 2) Vetor de dependências: qual ou quais as variáves de estado
    // que serão monitoradas para a execução do useEffect()


    // A informação é guardada no localStorage DEPOIS do componente
    // atualizado, como consequência da mudança de estado do nome.
    // Toda vez que mudar o conteúdo do input, será alterado o valor
    // da variável de estado "name".

    function handleChange(event) {
        // A atualização da variável de estado "name" vai desencadear
        // uma atualização do componente. Após a atualização ter sido
        // processada, será executado o useEffect().
      setName(event.target.value)
    }
    return (
      <div>      
          <form>        
              <label htmlFor="name">Name: </label>        
              <input value={name} onChange={handleChange} 
              id="name" />      
              </form>      
              {name ? <strong>Hello {name}</strong> : 
              'Please type your name'}
              <div>Quantidade de atualizações: {count}</div>
      </div>  )
  }