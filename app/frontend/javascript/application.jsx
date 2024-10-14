import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

import updateCurrentUser from "./data_loaders/update_current_user";
import updateItems from "./data_loaders/update_items";

import Sidebar from "./components/ui/sidebar";
import Footer from "./components/ui/footer";

// import FullPageLoader from "./components/loader/full_page_loader";
// import CustomToaster from "./components/custom_toaster";

function Application() {
  useEffect(() => {
    updateCurrentUser();
    updateItems();
  });

  return(
    <BrowserRouter>
      {/* // TODO: Full page loader will be implemented in #WDL-7 */}
      {/*<FullPageLoader/>*/}
      {/*<CustomToaster/>*/}

      <div
        className="
          fixed top-0 right-0
          w-full min-h-screen
          overflow-y-scroll
          grid grid-cols-[max-content_auto]
        "
      >
        <Sidebar/>

        <Router/>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default Application;
