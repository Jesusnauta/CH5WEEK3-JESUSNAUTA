/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { Card } from '../card/card';
import { Component } from '../component/component';
import { PokemonStructure } from '../../models/pokemon';
// Te import './pokemonList.scss';
import { PokeRepoApi } from '../../services/repository/pokeRepoApi';

export class PokemonList extends Component {
  public pokemonList!: PokemonStructure[];
  constructor(public selector: string, public pokemonRepo: PokeRepoApi) {
    super();
    this.template = this.createTemplate();
    this.load();
  }

  async load() {
    this.pokemonList = await this.pokemonRepo.getPokemons();
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    this.pokemonList.forEach((item) => {
      new Card('.pokemons__grid', item);
    });
  }

  createTemplate() {
    return `
    <section class="pokemons">
      <ul class="pokemons__grid">
      </ul>
    </section>
    `;
  }
}
