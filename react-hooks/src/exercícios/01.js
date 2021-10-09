import * as React from 'react'
export default function Exercicio01() {
    // 💣 delete this variable declaration and 
    // replace it with a React.useState call  
    const [name, setName] = React.useState('')
    // quando eu crio um estado (no caso, useState)
    // o useState retorna 2 valores:
    // uma somente leitura (name) e uma para alterar
    // o valor da variável (setName)

    function handleChange(event) {
      // 🐨 update the name here based on event.target.value
      // usar a função setName para atualizar a variável de estado name
      // pegando o conteúdo do input via event.target.value
      setName(event.target.value)
      // setName muda o estado do componente 
    }
    return (
      <div>      
          <form>        
              <label htmlFor="name">Name: </label>        
              <input onChange={handleChange} id="name" />      
              </form>      
              {name ? <strong>Hello {name}</strong> : 
              'Please type your name'}
              {/* condição de saída: quando o name for vazio,
              vai para o 'else' que no caso são os ":"
              Se estiver vazio, pede para digitar o nome */}
      </div>  
      )
  }