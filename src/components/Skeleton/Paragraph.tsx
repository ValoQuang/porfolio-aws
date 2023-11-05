import { getCountDays } from "../../utils/getCountDays";

const Paragraph = () => {
  return (
    <>
      <div className="pr-5">
        <header className="text-name pb-10">Education background</header>
        <p>
          I came to Finland in 2014, as a student back then, I studied in
          Metropolia UAS in Electrical Engineering.
        </p>
        <br />
        <p>
          During study and after graduation in 2018, I have been working in
          different industries, in order to sharpen my social skills and built
          my solid work attitude.
        </p>
        <br />
        <p>
          During 2021 - 2023, I came to software development and started to work
          as software engineer in early 2022 - Present.
        </p>

        <br />
        <p>------------------------</p>
        <br/>
        <header className="text-name pb-10">SWE background</header>
        <p>
          From the trainee to Frontend engineer, I have worked with wide range
          of tools and technologies.
        </p>
        <br />
        <p>
          After {getCountDays()} days, the most common language, framework, tools I
          have worked came down to: Typescript, ReactJS, GraphQL, SCSS, Material UI,
          TailwindCSS
        </p>
        <br />
        <p>
          During my career, I came to realization that AWS is crucial nowadays,
          hence I also equiped myself with AWS solution architect certificate
          and hoping to dive deeper into the AWS system.
        </p>
        <br />
        <p>------------------------</p>
        <br/>
      </div>
    </>
  );
};

export default Paragraph;
