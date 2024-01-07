import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Router from "./components/router/router";
import ErrorBoundary from "./components/confession/error_boundary";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
