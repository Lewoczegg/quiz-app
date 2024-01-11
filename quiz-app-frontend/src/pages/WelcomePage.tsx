import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="container mx-auto text-center p-4 min-h-screen flex flex-col justify-center lg:px-20">
      <h1 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
        Welcome to the IT Quiz App
      </h1>
      <p className="text-xl md:text-2xl text-neutral-darkgray mb-6">
        Your one-stop destination to test and enhance your knowledge in the IT
        industry. Dive into a variety of quizzes on topics like Java, Spring,
        and more to learn and grow.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/login">
          <button className="bg-secondary-green hover:bg-secondary-teal text-white font-bold py-2 px-8 rounded transition duration-300">
            Log In
          </button>
        </Link>

        <Link to="./register">
          <button className="bg-secondary-orange hover:bg-accent-yellow text-white font-bold py-2 px-8 rounded transition duration-300">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
