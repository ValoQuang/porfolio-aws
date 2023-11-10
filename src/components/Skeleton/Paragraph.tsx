import Buttons from "../Buttons";

type paragraphType = {
  header?: String;
  children: JSX.Element;
};

const Paragraph = ({ header, children }: paragraphType) => {
  return (
    <>
      <header className="text-name pb-10">{header}</header>
      <>{children}</>
      <br />
      <p>------------------------</p>
      <br />
      <Buttons text={""} to={""} />
    </>
  );
};

export default Paragraph;
