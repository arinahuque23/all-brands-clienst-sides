import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
        <img
          src="https://media.tenor.com/MLlF-ChHnoQAAAAC/aesthetic-error.gif"
          alt="404 Error"
          className="max-w-full"
        />
        <p className="text-2xl mt-4">Oops! Page not found.</p>
        <Link to="/" className="mt-4 text-blue-500 underline">
         <button className="btn bg-red-500"> Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
