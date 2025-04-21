import PokemonThumbnail from "./PokemonThumbnail"
import PokemonTypeStatus from "./PokemonTypeStatus"

export default function Pokemon({ pokemon }: { pokemon: any }) {
  return (
    <li key={pokemon.name} className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="flex-1 flex flex-col p-8">
        <PokemonThumbnail pokemon={pokemon} />
        <h3 className="mt-6 text-gray-900 text-sm font-medium capitalize">
          {pokemon.name}
        </h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Types</dt>
          <dd className="mt-3 flex gap-2 justify-center">
            {pokemon.types.map((type: any) => (
              <PokemonTypeStatus
                key={type.type.name}
                type={type}
              />
            ))}
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 flex-1 flex">
            <div className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium">
              <span className="ml-3">#{String(pokemon.id).padStart(3, '0')}</span>
            </div>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            <div className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium">
              <span className="ml-3">Base XP: {pokemon.base_experience}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
