const auth_key = "AIzaSyA7rGPR1K_8NFjwZKELh-sguFoSKHgmk5U";
export const GET_POPULAR_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  auth_key;
