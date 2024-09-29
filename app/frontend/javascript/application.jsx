import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
// import FullPageLoader from "./components/loader/full_page_loader";
// import SignIn from "./components/authorization/sign_in";
// import CustomToaster from "./components/custom_toaster";

import updateCurrentUser from "./data_loaders/update_current_user";

function Application() {
  useEffect(() => {
    updateCurrentUser();
  });

  return(
    <BrowserRouter>
      {/*<FullPageLoader/>*/}

      {/*<CustomToaster/>*/}
      {/* <SignIn/> */}

      <div>
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default Application;
