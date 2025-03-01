export const fetchVideos = async (category) => {
  const API_URL = `https://youtube-v31.p.rapidapi.com/search?q=${category}&part=snippet,id&maxResults=24&regionCode=US`;

  console.log(`Pozivam API sa URL: ${API_URL}`);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e449e6eed2mshe4779b9527ccbddp1a49c4jsn15f54b37fa5d",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(API_URL, options);
    if (!response.ok) throw new Error("Failed to fetch videos");

    const data = await response.json();
    return data.items.map((video) => ({
      id: video.id.videoId,
      title: video.snippet.title,
      description: video.snippet.description,
      channelTitle: video.snippet.channelTitle,
      thumbnail: video.snippet.thumbnails.medium.url,
      kind: video.id.kind,
      publishTime: video.snippet.publishTime,
    }));
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};
