const Button = ({ text, background }) => {
  return (
    <div
      className={`inline-block pr-4 pl-4 text-center rounded-full font-start p-2 text-white ${background}`}
    >
      {text}
    </div>
  );
};

export default Button;
