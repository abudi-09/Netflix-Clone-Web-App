import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingMovie(req, res) {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    );
    const randommoive =
      data.results[Math.floor(Math.random() * data.results.length)];
    res.status(200).json({ success: true, content: randommoive });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
export async function getMovieTrailers(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    );

    res.json({ success: true, trailer: data.results });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }

    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
export async function getMovieDetails(req, res) {
  const { id } = req.params;

  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    );
    res.status(300).json({ success: true, content: data });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }
    res.status(404).json({ success: false, message: "invaild error message " });
  }
}
export async function getSimilarMovie(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
    );
    res.status(200).json({ success: true, simliar: data.results });
  } catch (error) {
    res.status(404).json({ success: false, message: "Internal server Error " });
  }
}
export async function getbycategory(req, res) {
  const { category } = req.params;

  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`
    );
    res.status(200).json({ success: true, category: data.results });
  } catch (error) {
    res.status(400).json({ success: false, message: "Internal server error " });
  }
}
