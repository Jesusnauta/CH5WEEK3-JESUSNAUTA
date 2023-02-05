export type PokemonStructure = {
  name: string;
  img: string;
};

export class Pokemon implements PokemonStructure {
  public name: string;
  public img: string;
  public isFavorite: boolean;
  constructor(name: string, img: string) {
    this.name = name;
    this.img = img;
    this.isFavorite = false;
  }
}
