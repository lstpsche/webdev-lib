import { useEffect, useState } from "react";

function Footer() {
  const [time, setTime] = useState(new Date());

  const contributeBlock = () => {
    // TODO: clickable `contribute` button will be implemented in #WDL-13
    return ("Contribute")
  }

  const userBlock = () => {
    // TODO: dynamic user block will be implemented in #WDL-8
    return ("username")
  }

  useEffect(() => {
    var timer = setInterval(() => setTime(new Date()), 1000);

    return () => { clearInterval(timer) }
  })

  return (
    <footer
      className="
        fixed bottom-0 left-0
        w-full
        p-1 z-20
        bg-white dark:bg-gray-900
        flex justify-between
        border-t
        border-gray-100 dark:border-gray-600
        text-gray-700 dark:text-gray-400
        text-xs font-medium antialiased
        py-1 px-4
      "
    >
      <div id="footer-username">
        { userBlock() }
      </div>
      <div className="flex flex-row">
        <div
          className="
            mx-12 px-2
            border-x rounded-sm
            border-gray-100 dark:border-gray-600
          "
        >
          { contributeBlock() }
        </div>
        <div id="current-time">
          <p className="uppercase">{time.toLocaleTimeString([], { timeStyle: "short", hour12: true })}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
