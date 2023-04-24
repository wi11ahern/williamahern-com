import Card from "../ui/card";

const Greeting = () => {
  return (
    <Card className="row-start-1 row-span-1 col-start-2 col-span-1 justify-self-center flex flex-col justify-center m-0 min-h-[100vh] min-w-[200px] max-w-[900px] duration-[1.5s]">
      <p className="text-2xl">Hi, my name is</p>
      <h1 className="text-yellow-500 text-8xl ">
        William Ahern<span className="text-white">.</span>
      </h1>
      <p className="text-2xl">
        I am a software engineer with experience across the stack, but more
        importantly,
      </p>
      <p className="text-2xl">
        I am a <span className="text-emerald-400">builder</span>,{" "}
        <span className="text-emerald-400">problem solver</span>, and{" "}
        <span className="text-emerald-400">lifelong learner</span>.
      </p>
    </Card>
  );
};

export default Greeting;