interface ButtonProp {
  text?: string;
  onClick:
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
    | (() => void);
}

const Button = ({ text, onClick }: ButtonProp) => {
  return (
    <div>
      <button
        className="hover:pointer hover:bg-black hover:text-white"
        onClick={(event) => onClick(event)}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
