import Link from "next/link";
import { API_URL } from "../../api/url";

export const metadata = {
  title: "Home"
}

async function getMovies() {
  await new Promise((resolve) => { setTimeout(resolve, 1000)})
  const response = await fetch(API_URL);
  const json = await response.json();
  return json
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>
    <ul>
      {movies.map((movie) => (
        <li><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>
      ))}
    </ul>
  </div>
}