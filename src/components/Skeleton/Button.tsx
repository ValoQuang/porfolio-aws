interface ButtonProp {
  text?: string;
  onClick:
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
    | (() => void);
}

const Button = ({ text, onClick }: ButtonProp) => {
  const title = text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
  return (
    <div>
      <button
        className="hover:pointer hover:bg-black hover:text-white"
        onClick={(event) => onClick(event)}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
