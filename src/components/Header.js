import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">Streamer</Link>
      <div className="right menu">
        <Link href="/StreamList">All Streams</Link>
      </div>
    </div>
  )
}

export default Header;