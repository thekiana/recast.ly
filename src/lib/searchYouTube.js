var searchYouTube = (options, callback) => {


  $.get('https://www.googleapis.com/youtube/v3/search', options, callback);
};

export default searchYouTube;