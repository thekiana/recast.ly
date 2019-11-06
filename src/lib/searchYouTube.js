var searchYouTube = (options, callback) => {
  // debugger;
  var getObj = {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max || 5,
    type: 'video',
    videoEmbedded: 'true'
  };

  $.get('https://www.googleapis.com/youtube/v3/search', getObj)
    .done(({ items }) => {
      if (callback) {
        callback(items);
      }
    });

};
window.searchYouTube = searchYouTube;
export default searchYouTube;
