import { PokeRepoApi } from '../../services/repository/pokeRepoApi';

describe('first', () => {
  let repo: PokeRepoApi;
  beforeEach(() => {
    repo = new PokeRepoApi();
  });
  test('should first', () => {
    console.log(repo.getPokemons());
  });
});
