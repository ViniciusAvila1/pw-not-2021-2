import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
//não precisou colocar ./ pois o react-router-dom já está no node modules
import Teste1 from './exercícios/Teste1'
import Teste2 from './exercícios/Teste2'
import Exercício01 from './exercícios/01'
//precisa colocar ./ antes pois os testes vêm de outra pasta

import './App.css';

function App() {
  return (
    <>
    <h1>React Hooks</h1>
      <blockquote>
        <em>Hooks</em> são funções especiais do React que
        podem ser usadas dentro de componentes funcionais para
        armazenar dados ou para realizar ações atreladas ao
        ciclo de vida do componente (efeitos colaterais).
        Essas funções incluem <code>useState</code>, <code> useEffect</code>
        e <code>useRef</code>.
      </blockquote>

      <BrowserRouter>

        <ul>
          <li>
            <Link to="teste1">Teste 1</Link>
            {/* "to" é o link no final da URL */}
          </li>
          <li>
          <Link to="teste2">Teste 2</Link>
          </li>
          <li>
          <Link to="ex01">Exercício 01</Link>
          </li>
        </ul>

        <div style={{ border: '1px solid blue', padding: '20px'}}>
        <Switch>
          {/* Switch vê o que foi colocado no final da URL */}
          <Route path="/teste1">
            <Teste1 />
            {/* Se o final da rota tiver "/teste1", vai mostrar o teste1 */}
          </Route>
          <Route path="/teste2">
            <Teste2 />
          </Route>
          <Route path="/ex01">
            <Exercício01 />
          </Route>
        </Switch>
        </div>
      </BrowserRouter>
    </>

    
  );
}

export default App;
