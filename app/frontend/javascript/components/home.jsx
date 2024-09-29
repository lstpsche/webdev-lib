import SidebarTree from "./ui/sidebar_tree";
import Body from "./ui/body";
import Footer from "./ui/footer";

function Home() {
  return (
    <>
      <div
        className="
          fixed top-0 right-0
          w-full h-screen
          grid grid-cols-[max-content_auto]
        "
      >
        <SidebarTree/>
        <Body/>
      </div>
      <Footer/>
    </>
  )
}

export default Home;
