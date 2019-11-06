var searchYouTube = (options, callback) => {
  // debugger;
  var newObj = {
    part: 'snippet',
    key: options.key,
    q: options.query,
    type: 'video',
    maxResults: options.max,
    videoEmbeddable: 'true'
  };

  $.get('https://www.googleapis.com/youtube/v3/search', newObj)
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    });


};

export default searchYouTube;
