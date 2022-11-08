import './index.css';

import WebView from "./views/webView";
import MobileView from "./views/mobileView";

import  { Breakpoint, BreakpointProvider } from 'react-socks';

function App() {

  return (
    <BreakpointProvider>
      <div className="App">
        <Breakpoint medium up>
          <WebView />
        </Breakpoint>
      
        <Breakpoint small down>
          <MobileView />
        </Breakpoint>
      </div>
    </BreakpointProvider>

  );
}

export default App;