import getTypeColor from "../helpers/getPokemonTypeColor"

export default function PokemonTypeChip({ type } : { type: any }) {
  return (
    <span className={`capitalize px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(type.type.name)}`}>
      {type.type.name}
    </span>
  )
}