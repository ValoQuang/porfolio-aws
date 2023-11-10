import { useNavigate } from "react-router-dom";
interface ButtonProp {
  text?: string;
  to: string | number ;
}

const Buttons = ({ text, to }: ButtonProp) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to as number | number);
  };

  return (
    <div>
      <button
        className="hover:pointer hover:bg-black hover:text-white"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Buttons;
