import { Component } from '../Component.js';
import { PokemonItem } from './PokemonItem.js';

export class PokemonList extends Component {
    renderHTML() {
        return /*html*/`
            <ul class="pokemon"></ul>
        `;
    }

    onRender(dom) {
        const pokemons = this.props.pokemons;

        pokemons.forEach(pokemon => {
            // WILL IT CAUSE A PROBLEM THAT THE POKEMON OBJECT HAS A POKEMON PROPERTY?
            // HERE I WANT THE ENTIRE OBJECT
            const props = { pokemon };
            const pokemonItem = new PokemonItem(props);
            const pokemonItemDOM = pokemonItem.renderDOM();
            dom.appendChild(pokemonItemDOM);
        });
    }
}
