import React from 'react'
import '../index';
import WebView from "../views/webView";
import MobileView from '../views/mobileView';

const Homepage = () => {
  return (
    <>
      <div className="App">
    {/* wide screen */}
        <WebView />
    
    {/* mobile screen */}
        <MobileView />
    </div>
    </>
  )
}

export default Homepage
