const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmMzZWY0ZTE4MTExZGVhMTMzMWVhOTkyYjhhZWM3ZCIsInN1YiI6IjY1Mjk3MWM0MGNiMzM1MTZmNjNkZDI0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vDzwUPszdyMSM8LCFli85hDCUtBSzeCH81sPc2S_dHs'
  }
};

export const getAnimeMovies = async () => {
  try {
    const allResults: any[] = [];
    const response = await fetch('https://api.themoviedb.org/3/search/tv?query=animation&include_adult=false&language=en-US&page=1', options);
    const data = await response.json();

    if (response.ok) {
      allResults.push(...data.results);
      console.log(data);
      return data;
    } else {
      throw new Error('Failed to fetch Data');
    }
  } catch (error) { 
    console.error('Error fetching anime movies: ', error);
    return [];
  }
};

