import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { clsx } from "utils/index";

interface Props {
  children: React.ReactNode;
  link: string;
  className?: string;
}

function YoutubeVideo({ children, link, className = "" }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <div onClick={openModal} className={clsx(className)}>
        <div className="relative cursor-pointer">{children}</div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="rounded-2x max-w-full transform overflow-hidden text-left align-middle shadow-xl transition-all">
                  <div className="mx-auto h-[500px] w-screen max-w-full lg:h-[600px] lg:w-[800px]">
                    <iframe width="100%" height="100%" src={link} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

const Play = ({
  className = "",
  ...rest
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        "absolute flex h-full w-full items-center justify-center bg-transparent",
        className
      )}
      {...rest}
    >
      <div className="flex h-10 w-10 items-center justify-center">
        <svg
          width="39"
          height="38"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="19.5002" cy="19.0002" r="18.8" fill="white" />
          <path
            d="M26.5674 19.2061L15.5835 25.6788V12.7334L26.5674 19.2061Z"
            fill="#0A0A0A"
          />
        </svg>
      </div>
    </div>
  );
};

YoutubeVideo.Play = Play;
export default YoutubeVideo;
