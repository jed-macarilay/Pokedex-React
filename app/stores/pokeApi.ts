import { create } from "zustand"
import axios from "axios"

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
  base_experience: number;
}

interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

interface PokemonStore {
  pokemons: Pokemon[];
  isLoading: boolean;
  error: string | null;
  fetchPokemonKantoRegion: () => Promise<void>;
  fetchPokemon: (pokemon: string) => Promise<void>;
}

export const usePokemonStore = create<PokemonStore>((set, get) => ({
  pokemons: [],
  isLoading: false,
  error: null,
  fetchPokemonKantoRegion: async () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(function(allpokemon) {
        allpokemon.data.results.forEach(function(pokemon: any){
          get().fetchPokemon(pokemon)
        })
      })
  },

  fetchPokemon: async (pokemon: any) => {
    let url = pokemon.url

    axios.get(url)
      .then(function(pokemonData) {
        set({ pokemons: [...get().pokemons, pokemonData.data] })
      })
  }
}));