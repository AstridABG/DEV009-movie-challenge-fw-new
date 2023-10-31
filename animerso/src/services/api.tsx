const apiKey = '72c3ef4e18111dea1331ea992b8aec7d';


export const getAnimeMovies = async () => {
  try {
    const allResults: any[] = [];
    let currentPage = 1;
    let totalPages = 1;
    
while (currentPage <= totalPages) {
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=16&page=${currentPage}`;
  const response = await fetch(url);
  if (response.ok) {
  const data = await response.json();
  allResults.push(...data.results);
  totalPages = data.total_pages;
  currentPage++;
  return data.results;
  } else {
    throw new Error('Failed to fetch Data');
  }
}} catch (error) { 
      console.error('Error fetching anime movies: ', error);
      return [];
  }
};

