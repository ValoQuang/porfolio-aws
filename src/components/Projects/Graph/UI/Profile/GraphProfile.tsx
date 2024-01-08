import { lazy } from "react";
import ContributionCalendar from "../ContributionCalendar/GraphContributionCalendar";

const GraphChart = lazy(() => import("../Chart/GraphChart"));
const GraphProfile = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="border-[1px] border-gray-600 rounded-md p-2 shadow-2xl">
        <br />
        <p className=" text-4xl items-center flex justify-center">
          Hi 👋, I'm Quang
        </p>
        <br />
        <h3 className="center">
          A passionate frontend developer with Cloud mindset
        </h3>
        - 🔭 I’m currently working at [SayDuck](https://www.sayduck.com/) - 🌱
        I’m currently learning **AWS solution architect** - 📫 How to reach me
        **qtruongngoc95@gmail.com** - ⚡ Fun fact **I love to fly, learning
        about space**
        <h3 className="left">Connect with me:</h3>
        <div className="flex justify-start gap-5">
          <a
            href="https://www.linkedin.com/in/quang-truong-07b150215/"
            target="blank"
          >
            <img
              loading="lazy"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="https://www.linkedin.com/in/quang-truong-07b150215/"
              height="30"
              width="40"
            />
          </a>
          <a href="https://www.facebook.com/ngoc.quang.995/" target="blank">
            <img
              loading="lazy"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg"
              alt="https://www.facebook.com/ngoc.quang.754/"
              height="30"
              width="40"
            />
          </a>
          <a
            href="https://instagram.com/https://www.instagram.com/q.ilot/"
            target="blank"
          >
            <img
              loading="lazy"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
              alt="https://www.instagram.com/q.ilot/"
              height="30"
              width="40"
            />
          </a>
        </div>
        <br />
        <img
          loading="lazy"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=valoquang&show_icons=true&locale=en&layout=compact"
          alt="valoquang"
        />
        <br />
      </div>

      <br />
      <div className="">
        Pinned
        <GraphChart />
      </div>

      <br />
      <div>
        Contribution calendar
        <div className="border-[1px] border-gray-600 rounded-md p-2 shadow-2xl">
          <div className="hidden xl:block overflow-hidden">
            <ContributionCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphProfile;
