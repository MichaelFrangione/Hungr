/**
 * Takes a youtube url and returns the video id
 * @param {string} url url of the video to extract the Id from
 * @returns {string} videoId of the video passed in.
 */
export const getVideoId = url => {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  }
};
