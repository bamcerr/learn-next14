import { API_URL } from "../../../(home)/page";

async function getMovie(id:string) {
  console.log(`fetching movie: ${Date.now()}`)
  const response = await fetch(`${API_URL}/${id}`)
  const json = await response.json()
  return json
}

async function getVideos(id:string) {
  console.log(`fetching videos: ${Date.now()}`)
  const response = await fetch(`${API_URL}/${id}/videos`)
  const json = await response.json()
  return json
}

export default async function MovieDetail({
  params: {id}
} : {
  params : { id: string }
}) {
  console.log("===========");
  console.log("start fetching")
  const [movie, videos] = await Promise.all([
    getMovie(id),
    getVideos(id)
  ])
  console.log("end fetching");

  return <h1>{movie.title}</h1>;
}


