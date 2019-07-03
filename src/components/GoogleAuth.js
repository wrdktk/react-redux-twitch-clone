import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.init({
        clientId: 'clientId',
        scope: 'email'
      });
    });
  }


  render() {
    return <div>GoogleAuth</div>
  }
}

export default GoogleAuth;