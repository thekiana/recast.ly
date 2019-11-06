import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search video={this.state.currentVideo} callback={(data) => (this.handleSearch(data))}/></em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.currentVideo} /></em> view goes here</h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={this.state.videos} video={this.state.currentVideo} callback={(data) => (this.handleClick(data))}/></em> view goes here</h5></div>
          </div>
        </div>
      </div>
    );
  }

  handleClick(data) {
    this.setState({
      currentVideo: data //selectedVideo from click;
    });
  }

  handleSearch(text) {
    debugger;
    searchYouTube({
      query: text,
      max: 5,
      key: YOUTUBE_API_KEY
    }, (response) => {
      debugger;
      this.setState({
        videos: response,
        currentVideo: response[0]
      });
    });
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
