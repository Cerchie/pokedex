import React from 'react';
import Pokecard from './Pokecard'

const Pokedex = ({pokes}) => {
 return (
     <div className="PokdexCard">
     { pokes.map(p => (
         <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>
     )
     ) }
     </div>
 )
 };

export default Pokedex;