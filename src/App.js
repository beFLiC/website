import "./index.css";

import WebView from "./views/webView";
import MobileView from "./views/mobileView";
import { BreakpointProvider } from "react-socks";

function App() {
  return (
    <BreakpointProvider>
      <div className="App">
        {/* wide screen */}
        <div className="sm:block hidden z-0">
          <WebView />
        </div>

        {/* mobile screen */}
        <div className="sm:hidden block z-0">
          <MobileView />
        </div>
      </div>
    </BreakpointProvider>
  );
}

export default App;
