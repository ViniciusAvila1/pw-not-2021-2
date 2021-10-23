import * as React from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal() {
  // 💣 delete this, it's now managed by the Exercicio03
  const [animal, setAnimal] = React.useState('')
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={event => setAnimal(event.target.value)}
      />
    </div>
  )
}

// 🐨 uncomment this
// function Display({name, animal}) {
//   return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
// }

// 💣 remove this component in favor of the new one
function Display({name}) {
  return <div>{`Hey ${name}, you are great!`}</div>
}

export default function Exercicio03() { // componente pai
  // 🐨 add a useState for the animal
  const [name, setName] = React.useState('')
   
    function handleNameChange(event){
        setName(event.target.value)
    }

  return (
    <form>
      <Name name={name} onNameChange={handleNameChange} />
      {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}
      <FavoriteAnimal />
      {/* 🐨 pass the animal prop here */}
      <Display name={name} />
    </form>
  )
}