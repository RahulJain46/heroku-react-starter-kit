import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoListItem from '../components/video_list_item';
import { selectVideo } from '../actions/index';

class VideoList extends Component {
  render() {
    const videoItems = this.props.videos.map((video) => {
      return (
        <VideoListItem
          onVideoSelect={(video)=>{
            if (this.props.selected_video.etag !== video.etag) {
              this.props.selectVideo(video);
            }
          }}
          key={video.etag}
          video={video} />
      );
    });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  return {
    videos: state.videos,
    selected_video: state.selected_video
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectVideo }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoList);