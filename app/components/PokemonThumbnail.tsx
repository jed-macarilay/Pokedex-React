export default function PokemonThumbnail({ pokemon }: { pokemon: any }) {
  return (
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
  )
}