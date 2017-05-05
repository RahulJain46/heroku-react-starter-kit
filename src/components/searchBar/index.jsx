import _ from 'lodash'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideo } from '../../actions/index';
import styles from './style.less';

class SearchBar extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  searchVideo = _.debounce((term) => {
    // TODO loading
    this.props.searchVideo(term);
  }, 300);

  handleChange(event) {
    this.searchVideo(event.target.value);
  }

  render() {
    return (
      <div className={styles.root}>
        <input onChange={this.handleChange} />
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchVideo: PropTypes.func.isRequired,
};


// function mapStateToProps(state) {
//   // Whatever is returned will show up as props
//   return {
//     videos: state.videos
//   };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
