import type { Route } from "./+types/pokedex";
import { usePokemonStore } from "../stores/pokeApi"
import { useEffect, useMemo } from "react"
import PokemonTypeStatus from "~/components/PokemonTypeStatus"

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Pokedexxx" },
//     { name: "description", content: "Pokedex - Pokemon" },
//   ];
// }

async function loader({ params }: Route.LoaderArgs) {
}

export default function Pokemon({
  params,
}: Route.ComponentProps) {
  const { getPokemon, pokemon } = usePokemonStore()

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getPokemon(params.pokemon)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flex justify-between p-5">
      <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} className="w-1/2" />
      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="font-bold text-4xl capitalize">{pokemon?.name}</h1>
        <dl className="flex flex-col justify-between">
          <dt className="sr-only">Types</dt>
          <dd className="mt-3 flex gap-2">
            {pokemon?.types.map((type: any) => (
              <PokemonTypeStatus
                key={type.type.name}
                type={type}
              />
            ))}
          </dd>
        </dl>
        
        {/* Stats and abilities */}
        <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">Stats</h1>
              <div className="flex flex-col gap-2">
                {pokemon?.stats.map((stat: any) => (
                  <div key={stat.stat.name} className="flex gap-2 items-center">
                    <ul>
                      <li className="flex gap-2 items-center capitalize">
                        {stat.stat.name}: {stat.base_stat}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">Abilities</h1>
              <div className="">
                  {pokemon?.abilities.map((ability: any) => (
                    <div key={ability.ability.name} className="flex gap-2 items-center">
                      <ul>
                        <li className="flex gap-2 items-center capitalize">
                          {ability.ability.name}
                        </li>
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}