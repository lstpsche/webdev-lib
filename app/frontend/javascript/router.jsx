import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import NotFound from "./components/errors/not_found";
import Body from "./components/ui/body";
import ProjectShow from "./components/ui/body/item/project/show";
import ItemsGrid from "./components/ui/body/items_grid";

function Router(props) {
  const removeTrailingSlashes = () => {
    return (
      <Route path="/:url*(/+)" exact strict render={({ location }) => (
          <Navigate to={location.pathname.replace(/\/+$/, "")} />
        )}
      />
    )
  }

  // TODO: rework this file
  // TODO: make one func to render all routes, which are not depending on signedIn
  // TODO: make another func to render all routes, which are depending on signedIn
  // TODO: merge both funcs into one result, include signedIn routes if user signed in
  // TODO: that way we will avoid duplication of routes for both signed in and not signed in users

  const signedInRoutes = () => {
    return (
      <Routes>
        { removeTrailingSlashes() }
        <Route path="/" exact element={<Body />}>
          <Route path="/" element={<ItemsGrid />} />
          <Route path="/projects/:itemId" element={<ProjectShow />} />
        </Route>
        <Route path="/" element={<NotFound />} />
      </Routes>
    )
  }

  const notSignedInRoutes = () => {
    return (
      <Routes>
        <Route path="/" exact element={<Body />}>
          <Route path="/" element={<ItemsGrid />} />
          <Route path="/projects/:itemId" element={<ProjectShow />} />
        </Route>
        <Route path="/" element={<Navigate to="/" />} />
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
