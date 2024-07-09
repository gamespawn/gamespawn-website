import { BsCheckLg } from "react-icons/bs";

const Checkbox = ({ toggle, onClick = () => {}, text = "" }) => {
  return (
    <div
      className="flex items-center hover:cursor-pointer w-fit"
      onClick={onClick}
    >
      <div
        className={` w-4 h-4 font-thin mr-2 border-[1px] border-black flex items-center justify-center`}
      >
        <BsCheckLg className={`${toggle ? "text-black" : "text-white"} `} />
      </div>
      {text && <p className="text-lg font-thin">{text}</p>}
    </div>
  );
};

export default Checkbox;
