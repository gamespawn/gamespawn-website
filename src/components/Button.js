const Button = ({ text, background }) => {
  return (
    <div
      className={`inline-block min-w-48 text-center rounded-full font-start p-2 text-white ${background}`}
    >
      {text}
    </div>
  );
};

export default Button;
