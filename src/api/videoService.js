export const fetchVideos = async () => {
  try {
    const response = await fetch(
      "https://youtube-v31.p.rapidapi.com/search?q=New&part=snippet,id&maxResults=24&regionCode=US"
    );

    if (!response.ok) throw new Error("Failed to fetch videos");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("ERROR ERROR ERROR");
  }
};
