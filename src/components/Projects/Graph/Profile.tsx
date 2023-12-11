import ContributionCalendar from "./UI/ContributionCalendarModal";

const Profile = () => {
  return (
    <div>
      <h1 className="center">Hi 👋, I'm Quang</h1>
      <h3 className="center">
        A passionate frontend developer with Cloud mindset
      </h3>
      - 🔭 I’m currently working at [SayDuck](https://www.sayduck.com/) - 🌱 I’m
      currently learning **AWS solution architect** - 📫 How to reach me
      **qtruongngoc95@gmail.com** - ⚡ Fun fact **I love to fly, learning about
      space**
      <h3 className="left">Connect with me:</h3>
      <div className="flex justify-start gap-5">
        <a
          href="https://www.linkedin.com/in/quang-truong-07b150215/"
          target="blank"
        >
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
            alt="https://www.linkedin.com/in/quang-truong-07b150215/"
            height="30"
            width="40"
          />
        </a>
        <a href="https://www.facebook.com/ngoc.quang.995/" target="blank">
          <img
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
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
            alt="https://www.instagram.com/q.ilot/"
            height="30"
            width="40"
          />
        </a>
      </div>
      <br />
      <p>
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs?username=valoquang&show_icons=true&locale=en&layout=compact"
          alt="valoquang"
        />
      </p>
      <br />
      <div className="responsive">
        <ContributionCalendar />
      </div>
    </div>
  );
};

export default Profile;
