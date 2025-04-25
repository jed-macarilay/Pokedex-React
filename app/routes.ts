import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/pokedex.tsx"),
  route("/pokemon/:pokemon", "routes/pokemon.tsx")
] satisfies RouteConfig;