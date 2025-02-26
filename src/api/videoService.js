const API_URL =
  "https://youtube-v31.p.rapidapi.com/search?q=New&part=snippet,id&maxResults=24&regionCode=US";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e449e6eed2mshe4779b9527ccbddp1a49c4jsn15f54b37fa5d",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchVideos = async () => {
  try {
    const response = await fetch(API_URL, options);

    if (!response.ok) throw new Error("Failed to fetch videos");

    const data = await response.json();
    console.log("Fetched data:", data);

    return data.items.map((video) => ({
      id: video.id.videoId,
      title: video.snippet.title,
      description: video.snippet.description,
      channelTitle: video.snippet.channelTitle,
      thumbnail: video.snippet.thumbnails.medium.url,
      kind: video.id.kind,
    }));
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};
