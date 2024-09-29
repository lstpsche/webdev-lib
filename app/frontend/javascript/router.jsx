import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import NotFound from "./components/errors/not_found";
import Home from "./components/home";

function Router(props) {
  const removeTrailingSlashes = () => {
    return (
      <Route path="/:url*(/+)" exact strict render={({ location }) => (
          <Navigate to={location.pathname.replace(/\/+$/, "")} />
        )}
      />
    )
  }

  const signedInRoutes = () => {
    return (
      <Routes>
        { removeTrailingSlashes() }
        <Route path="/" exact element={<Home/>} />
        {/* <Route path="/sign_in" exact element={<Navigate to="/"/>} />
        <Route path="/sign_up" exact element={<Navigate to="/"/>} />*/}

        <Route path="/" element={<NotFound/>} />
      </Routes>
    )
  }

  const notSignedInRoutes = () => {
    return (
      <Routes>
        <Route path="/" exact element={<Home/>} />
        {/* <Route path="/sign_in" exact element={<SignIn/>} />
        <Route path="/sign_up" exact element={<SignUp/>} /> */}

        <Route path="/" element={<Navigate to="/"/>} />
      </Routes>
    )
  }

  switch (props.currentUserSignedIn) {
    case true:
      return signedInRoutes();
    case false:
      return notSignedInRoutes();
    default:
      return null;
  }
}

const mapStateToProps = ({ currentUser: { signedIn } }) => ({ currentUserSignedIn: signedIn });

export default connect(mapStateToProps)(Router);
