import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
class StreamEdit extends React.Component {

  componentDidMount() {
    const streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return <div>{this.props.stream.title}</div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);