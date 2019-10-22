/**
 * @param {string} url url of the video to extract the Id from
 * @returns {string} videoId of the video passed in.
 */
export const getVideoId = url => {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|v=)([^#?]*).*/;
  var match = url.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return null;
  }
};
