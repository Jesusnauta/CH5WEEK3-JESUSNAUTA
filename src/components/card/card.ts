/* eslint-disable no-unused-vars */
import { PokemonStructure } from '../../models/pokemon';
import { Component } from '../component/component';
import './card.scss';

export class Card extends Component {
  constructor(public selector: string, public pokemon: PokemonStructure) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
    this.pokemon = { ...pokemon };
  }

  private createTemplate() {
    return `
              <li class="card"><img src="${this.pokemon.img}" alt="" width="200px" class="card__img">
              <p class="card__name">${this.pokemon.name}</p><button>Eligeme!</button></li>
    `;
  }
}
