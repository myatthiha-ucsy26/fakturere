import { lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./routes/Routes";
import "./App.css";
import AuthProvider from "./context/AuthProvider";

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
