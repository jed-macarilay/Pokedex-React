export default function getTypeColor(type: string): string {
  const typeColors: { [key: string]: string } = {
    normal: 'bg-gray-200 text-gray-800',
    fire: 'bg-red-200 text-red-800',
    water: 'bg-blue-200 text-blue-800',
    electric: 'bg-yellow-200 text-yellow-800',
    grass: 'bg-green-200 text-green-800',
    ice: 'bg-cyan-200 text-cyan-800',
    fighting: 'bg-red-400 text-white',
    poison: 'bg-purple-200 text-purple-800',
    ground: 'bg-amber-200 text-amber-800',
    flying: 'bg-indigo-200 text-indigo-800',
    psychic: 'bg-pink-200 text-pink-800',
    bug: 'bg-lime-200 text-lime-800',
    rock: 'bg-stone-200 text-stone-800',
    ghost: 'bg-violet-200 text-violet-800',
    dragon: 'bg-violet-400 text-white',
    dark: 'bg-neutral-400 text-white',
    steel: 'bg-slate-300 text-slate-800',
    fairy: 'bg-pink-300 text-pink-800'
  };
  
  return typeColors[type] || 'bg-gray-200 text-gray-800';
}