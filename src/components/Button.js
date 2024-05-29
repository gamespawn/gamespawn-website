const Button = ({ text, background }) => {
  return (
    <div
      className={`drop-shadow-xl inline-block  whitespace-nowrap text-xl lg:text-2xl text-center rounded-full font-start py-3 px-4  text-white transition hover:cursor-pointer hover:scale-110 ${background}`}
    >
      {text}
    </div>
  );
};

export default Button;
