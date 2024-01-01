import { Toaster, ToastIcon, resolveValue } from "react-hot-toast";
import { Transition } from "@headlessui/react";

function CustomToaster() {
  return(
    <Toaster
      position="top-right"
      reverseOrder={true}
    >
      {
        (t) => (
          <Transition
            appear
            show={t.visible}
            className="flex p-4 mt-9 bg-white rounded shadow-lg"
            enter="transition-all duration-500"
            enterFrom="opacity-0 translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="transition-all duration-400"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full"
          >
            <ToastIcon toast={t} />
            <p className="px-2">{resolveValue(t.message)}</p>
          </Transition>
        )
      }
    </Toaster>
  );
}

export default CustomToaster;
