import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((oneVideo) => {
      return (<VideoListEntry video={oneVideo} key={oneVideo.id.videoId} callback={props.callback}/>);
    })}
  </div>
);
//<div><h5><em></em> view goes here</h5></div>
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;