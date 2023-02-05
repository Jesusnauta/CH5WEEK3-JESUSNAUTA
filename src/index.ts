/* eslint-disable no-new */
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { PokemonList } from './components/Pokemon-list/pokemonList';
import { PokeRepoApi } from './services/repository/pokeRepoApi';

new Header('main');
new PokemonList('main', new PokeRepoApi());
new Footer('main');
