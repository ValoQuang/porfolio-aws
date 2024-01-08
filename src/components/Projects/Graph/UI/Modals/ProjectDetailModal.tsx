import React, { useState } from "react";

const arrowIcon = (
  <svg
    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 10"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M1 5h12m0 0L9 1m4 4L9 9"
    />
  </svg>
);

type DetailModalProp = {
  top: number;
  left: number;
};

const ProjectDetailModal = ({ top, left }: DetailModalProp) => {
  const topRounded = Math.floor(top - 200) + "px";
  const leftRounded = Math.floor(left - 390) + "px";

  return (
    <div>
      <div
        id="output"
        style={{ top: `${topRounded}`, left: `${leftRounded}` }}
        className="absolute w-96 h-96 border border-gray-200 rounded-lg bg-slate-700 shadow-2xl z-40"
      >
        <a href="#">
          <img
            className="rounded-t-lg"
            src="/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            {arrowIcon}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
