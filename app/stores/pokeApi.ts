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
  pokemon: Pokemon | null;
  pokemons: Pokemon[];
  isLoading: boolean;
  error: string | null;
  fetchPokemonKantoRegion: () => Promise<void>;
  getPokemon: (pokemon: string) => Promise<void>;
  getPokemonFromUrl: (url: string) => Promise<void>;
}

export const usePokemonStore = create<PokemonStore>((set, get) => ({
  pokemon: null,
  pokemons: [],
  isLoading: false,
  error: null,
  fetchPokemonKantoRegion: async () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(function(allpokemon) {
        allpokemon.data.results.forEach(async function(pokemon: any) {
          get().getPokemonFromUrl(pokemon.url)
        })
      })
  },

  getPokemon: async (pokemon: any) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => {
        set(() => ({
          pokemon: response.data,
        }))
      })
      .catch(error => {
        console.log("Internal Server")
      })
  },

  getPokemonFromUrl: async (url: string) => { 
    axios.get(url)
      .then(response => {
        set(() => ({
          pokemons: [...get().pokemons, response.data],
        }))
      })
      .catch(error => {
        console.log("Internal Server")
      })
  }
}));