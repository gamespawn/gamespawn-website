const Button = ({ text, background }) => {
  return (
    <div
      className={`inline-block  text-3xl text-center rounded-full font-start py-3 px-8  text-white transition hover:scale-110 ${background}`}
    >
      {text}
    </div>
  );
};

export default Button;
