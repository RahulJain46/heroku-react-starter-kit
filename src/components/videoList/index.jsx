import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoListItem from '../videoListItem';
import { selectVideo } from '../../actions';

class VideoList extends Component {
  constructor (props) {
    super(props);
    this.handleVideoSelect = this.handleVideoSelect.bind(this);
  }

  handleVideoSelect(video) {
    this.props.selectVideo(video.id.videoId);
  }

  render() {
    const videoItems = this.props.videos.map((video) => {
      return (
        <VideoListItem
            key={video.id.videoId}
            onVideoSelect={this.handleVideoSelect}
            video={video}
        />
      );
    });

    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    );
  }
}

VideoList.propTypes = {
  selectVideo: PropTypes.func.isRequired,
  videos: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  return {
    videos: state.videos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectVideo }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
