import React from "react";
import ReactDOM from "react-dom";

function App() {
  return(
    <div>
      <Logo/>
      <BestPokemon/>
    </div>
  );
}

function Logo(){
  return  <header>
            <h1>Welcome to Pokedex</h1>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokemon bird"></img>
          </header>;
}

function BestPokemon() {
  return <p>My favorite Pokemon is Squirtle</p>;
}

ReactDOM.render(<App />, document.querySelector("#root"));
export default App;

