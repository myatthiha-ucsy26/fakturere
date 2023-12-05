// react
import { lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// routes
import Routers from "./routes/Routes";
// provider
import AuthProvider from "./context/AuthProvider";
// css
import "./App.css";
// lazy loading
const Layout = lazy(() => import("./layout/Layout"));

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          {({ isAuth }) => (
            <Layout isAuth={isAuth}>
              <Routers />
            </Layout>
          )}
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
