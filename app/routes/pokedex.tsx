import type { Route } from "./+types/pokedex"
import Main from "../pages/pokedex/main"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pokedex" },
    { name: "description", content: "Welcome to Pokedex!" },
  ];
}

export default function Home() {
  return <Main />
}