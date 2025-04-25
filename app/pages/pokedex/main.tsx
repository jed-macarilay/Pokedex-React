import { usePokemonStore } from "../../stores/pokeApi"
import { useEffect, useState } from "react"
import Loading from "../../components/loading"
import Pokemon from "../../components/Pokemon"

export default function Main() {
  const { pokemons, fetchPokemonKantoRegion } = usePokemonStore()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        await fetchPokemonKantoRegion()
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {pokemons.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </ul>
      )}
    </>
  );
}