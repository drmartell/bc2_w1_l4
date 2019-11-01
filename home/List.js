import { Component } from '../Component.js';

export class List extends Component {
    
    renderHTML() {
        return /*html*/`
        <div>
        <p class="paging">
        <button class="prev" disabled><img id="left-arrow" src="./assets/icons8-arrow-100-left.png"></button>
        <span>Page 1 of 1,000,000</span>
        <button class="next"><img id="right-arrow" src="./assets/icons8-arrow-100-right.png"></button>
        </p>
        <ul class="pokemon">
            <li class="pokemon-item">
                <h2>
                    <img 
                        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/593.png"
                        alt="Jellicent image"
                    >
                </h2>
                <div class="name">Jellicent</div>
                <div class="section-ul-li_category-div">
                    Category
                </div>
            </li>
            <li class="pokemon-item">
                <h2>
                    <img 
                        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/593.png"
                        alt="Jellicent image"
                    >
                </h2>
                <div class="name">Jellicent</div>
                <div class="section-ul-li_category-div">
                    Category
                </div>
            </li>
            <li class="pokemon-item">
                <h2>
                    <img 
                        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/593.png"
                        alt="Jellicent image"
                    >
                </h2>
                <div class="name">Jellicent</div>
                <div class="section-ul-li_category-div">
                    Category
                </div>
            </li>
            <li class="pokemon-item">
                <h2>
                    <img 
                        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/593.png"
                        alt="Jellicent image"
                    >
                </h2>
                <div class="name">Jellicent</div>
                <div class="section-ul-li_category-div">
                    Category
                </div>
            </li>
            <li class="pokemon-item">
                <h2>
                    <img 
                        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/593.png"
                        alt="Jellicent image"
                    >
                </h2>
                <div class="name">Jellicent</div>
                <div class="section-ul-li_category-div">
                    Category
                </div>
            </li>
            <li class="pokemon-item">
                <h2>
                    <img 
                        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/593.png"
                        alt="Jellicent image"
                    >
                </h2>
                <div class="name">Jellicent</div>
                <div class="section-ul-li_category-div">
                    Category
                </div>
            </li>
            <li class="pokemon-item">
                <h2>
                    <img 
                        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/593.png"
                        alt="Jellicent image"
                    >
                </h2>
                <div class="name">Jellicent</div>
                <div class="section-ul-li_category-div">
                    Category
                </div>
            </li>
            <li class="pokemon-item">
                <h2>
                    <img 
                        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/593.png"
                        alt="Jellicent image"
                    >
                </h2>
                <div class="name">Jellicent</div>
                <div class="section-ul-li_category-div">
                    Category
                </div>
            </li>
            <li class="pokemon-item">
                <h2>
                    <img 
                        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/593.png"
                        alt="Jellicent image"
                    >
                </h2>
                <div class="name">Jellicent</div>
                <div class="section-ul-li_category-div">
                    Category
                </div>
            </li>
        </ul>
        </div>
        `;
    }
}
