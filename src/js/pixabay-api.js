import axios from "axios";

const apiKey = "51289001-701d2fcdb5357aeffdf8b918c";
const perPage = 15;

export async function searchImages(query, page) {
  const url = `\`https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
    query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(url);
    const { hits, totalHits } = response.data;
    return { hits, total: totalHits };
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}