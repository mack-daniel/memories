import { Container } from "@material-ui/core";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

import { GoogleOAuthProvider } from "@react-oauth/google";

// const user = JSON.parse(localStorage.getItem("profile"));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navigate to="/posts" replace />,
//   },
//   {
//     path: "/posts",
//     element: <Home />,
//   },
//   {
//     path: "/posts/search",
//     element: <Home />,
//   },

//   {
//     path: "/posts/:id",
//     element: <PostDetails />,
//   },
//   {
//     path: "/auth",
//     element: !user ? <Auth /> : <Navigate to="/posts" replace />,
//   },
// ]);

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    // <GoogleOAuthProvider clientId="160027821140-3tv44f29thvquk4qcsfa4mqhkpls9ui2.apps.googleusercontent.com">
    //   <Router>
    //     <Container maxWidth="lg">
    //       <Navbar />
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/auth" element={<Auth />} />
    //       </Routes>
    //     </Container>
    //   </Router>
    // </GoogleOAuthProvider>

    <GoogleOAuthProvider clientId="160027821140-3tv44f29thvquk4qcsfa4mqhkpls9ui2.apps.googleusercontent.com">
      <Router>
        <Container maxWidth="lg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/posts" replace />} />
            <Route path="/posts" element={<Home />} />
            <Route path="/posts/search" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route
              path="/auth"
              element={!user ? <Auth /> : <Navigate to="/posts/" replace />}
            />
          </Routes>
        </Container>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
