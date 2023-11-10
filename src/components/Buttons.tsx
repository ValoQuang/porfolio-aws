import { useNavigate } from "react-router-dom";
interface button {
  text?: string;
  to: string | number ;
}

const Buttons = ({ text, to }: button) => {
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
