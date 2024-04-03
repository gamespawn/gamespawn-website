const Button = ({ text, background }) => {
  return (
    <div
      className={`inline-block  text-3xl text-center rounded-full font-start py-3 px-8  text-white ${background}`}
    >
      {text}
    </div>
  );
};

export default Button;
