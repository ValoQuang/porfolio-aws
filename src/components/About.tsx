import Body from "./Skeleton/Body";
import Paragraph from "./Skeleton/Paragraph";

const About = (): JSX.Element => {
  return (
    <div className="flex w-full">
      <Body
        children={
          <>
            <div className="w-7/12"><Paragraph /></div>
           
          </>
        }
      />
    </div>
  );
};

export default About;