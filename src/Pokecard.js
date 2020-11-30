import React from 'react';

const Pokecard = (props) => (
<div>
    <h4>{props.name}</h4>
    <h4>{props.type}</h4>
    <h4>{props.base_experience}</h4>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt=""></img>
</div>
)

export default Pokecard;