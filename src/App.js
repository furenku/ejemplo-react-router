import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
import CosasLista from './componentes/Cosas/CosasLista/CosasLista';
import CosaResumen from './componentes/Cosas/CosaResumen/CosaResumen';
import CosaDetalle from './componentes/Cosas/CosaDetalle/CosaDetalle';
import NoEncontrado from './componentes/NoEncontrado/NoEncontrado';



function App() {
  return (

      <div className="App">
        
        <header className="CabeceraPrincipal">
          <nav>
            <ul>
              <NavLink exact to="/">
                Inicio
              </NavLink>
              <NavLink exact to="/resumen">
                Resumen
              </NavLink>
              <NavLink exact to="/cosa/0">
                Detalle
              </NavLink>
            </ul>
          </nav>
        </header>


        <Switch>

          <Route path="/cosa/:id" exact component={CosaDetalle}/>

          <Route path="/resumen" exact component={CosaResumen}/>
          <Route path="/" exact component={CosasLista}/>

          <Route path="*" exact component={NoEncontrado}/>

        </Switch>
      </div>

  );
}

export default App;
