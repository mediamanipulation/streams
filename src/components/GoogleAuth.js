import React from 'react'


class GoogleAuth extends React.Component {
  componentDidMount(){
    window.gapi.load('client:auth2');

  }
  render () {
    return(
      <div> GOOGLE AUTH</div>
    )
  }
}
export default GoogleAuth;