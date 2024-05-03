import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="flex flex-col space-y-4 items-center h-screen justify-center">
      <h1 className="text-strong text-game-blue-400 text-9xl font-russo">
        404
      </h1>
      <p className="text-4xl font-monda font-bold">OOPS, PAGE NOT FOUND!</p>
      <a href="/">
        <Button text="home" background="bg-game-blue-200" />
      </a>
    </div>
  );
};

export default NotFound;
