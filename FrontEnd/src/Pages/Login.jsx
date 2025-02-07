import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "/public/register.avif";
import axiosInstance from "../utilis/axiosInstance.jsx";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState(null);
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is Required");
    }

    if (!password) {
      setError("Password is Required");
    }
    setError("");
    try {
      const response = await axiosInstance.post("api/auth/login", {
        password: password,
        email: email,
      });

      if (response.data && response.data.accessToken) {
        Navigate("/");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        console.log("Unexpected Error");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[radial-gradient(circle,_#008080,_#b2d8d8)]">
      <div className="w-auto bg-white p-6 rounded-lg shadow-lg shadow-black flex">
        <div className="w-1/2 py-1 mx-4">
          <img src={image} className=" h-[25rem] w-[34rem] px-3" />
        </div>
        <div className="w-1/2">
          <h1 className="text-center text-[#66b2b2] font-extrabold text-4xl py-2 my-2">
            LOGIN
          </h1>
          <form>
            <div className="text-lg p-5 mt-2 flex flex-col">
              <br />
              <input
                placeholder="Email"
                type="email"
                className="p-2 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                placeholder="Password"
                type="password"
                className="p-2 border rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />

              {Error && (
                <p className="text-red-600 text-lg text-center pb-1 pt-2">
                  {" * "}
                  {Error}
                  {" * "}
                </p>
              )}

              <br />
              <button
                type="submit"
                className="bg-[#008080] p-2 rounded-xl mt-2 text-white hover:bg-blue-500 transition ease-in-out"
                onClick={handleSubmit}
              >
                Login
              </button>
              <div className="mt-4 text-center">
                <span className="font-semibold tracking-wide">
                  Not registered?{" "}
                  <Link
                    to="/register"
                    className="text-[#008080] hover:text-violet-600"
                  >
                    Register
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
