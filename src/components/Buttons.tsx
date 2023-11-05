import { useNavigate } from "react-router-dom";
interface button {
  text: string;
  to: string;
}

const Buttons = ({ text, to }: button) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
  };
  return (
    <div className="pl-10">
      <button
        className="p-link text-20 hover:pointer hover:bg-black hover:text-white"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Buttons;
