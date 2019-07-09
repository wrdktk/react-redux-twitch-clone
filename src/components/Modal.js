import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick=
      {() => history.push('/')}
      className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <div className="header">Delete A Stream</div>
        <div className="content">
          <p>Are you sure you want to delete this stream?</p>
        </div>
        <div className="actions">
          <div className="ui button primary">Delete</div>
          <div className="ui button">Cancel</div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal;