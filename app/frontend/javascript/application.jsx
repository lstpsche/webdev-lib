import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
// import FullPageLoader from "./components/loader/full_page_loader";
// import SignIn from "./components/authorization/sign_in";
// import CustomToaster from "./components/custom_toaster";

import updateCurrentUser from "./data_loaders/update_current_user";
import updateItems from "./data_loaders/update_items";

function Application() {
  useEffect(() => {
    updateCurrentUser();
    updateItems();
  });

  return(
    <BrowserRouter>
      {/*<FullPageLoader/>*/}

      {/*<CustomToaster/>*/}

      <div>
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default Application;
