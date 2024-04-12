import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-strong text-game-blue-100 text-9xl font-russo leading-3 my-12">
        404
      </h1>
      <p className="text-4xl font-monda font-bold">OOPS, GAME OVER</p>
      <p className="font-monda text-xl p-2">page not found!</p>{" "}
      <a href="/">
        <Button text="home" background="bg-game-blue-200" />
      </a>
    </div>
  );
};

export default NotFound;
