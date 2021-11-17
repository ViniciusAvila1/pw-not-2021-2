import * as React from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to 
// this component
function FavoriteAnimal({animal}, onAnimalChange) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

// 🐨 uncomment this
// function Display({name, animal}) {
// return <div>{`Hey ${name}, your favorite animal
// is: ${animal}!`}</div>
// }

// 💣 remove this component in favor of the new one
function Display({name}) {
  return <div>{`Hey ${name}, you are great!`}</div>
}

export default function Exercicio03() { // componente pai
  // 🐨 add a useState for the animal
  const [name, setName] = React.useState('')
  const [animal, setAnimal] = React.useState('') // colocando
  // a variável de estado no pai
   
    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleAnimalChange(event) {
      setAnimal(event.target.value)
    }
    

  return (
    <form>
      <Name name={name} onNameChange={handleNameChange} />
      {/* 🐨 pass the animal and onAnimalChange prop 
      here (similar to the Name component above) */}
      <FavoriteAnimal animal={animal} onAnimalChange={handleAnimalChange} />
      {/* 🐨 pass the animal prop here */}
      <Display name={name} animal={animal} />
    </form>
  )
}