import { useState } from "react";
import { Link } from "react-router-dom";
import image from "/public/register.avif";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[radial-gradient(circle,_#008080,_#b2d8d8)]">
      <div className="w-auto bg-white p-6 rounded-lg shadow-lg shadow-black flex">
        <div className="w-1/2 py-1 mx-4">
          <img src={image} className=" h-[25rem] w-[34rem] px-3" />
        </div>
        <div className="w-1/2">
          <h1 className="text-center text-[#66b2b2] font-extrabold text-4xl py-2 my-2 tracking-wide">
            LOGIN
          </h1>
          <form>
            <div className="text-lg p-5 mt-2 flex flex-col">
              <input
                placeholder="Username"
                className="p-2 border rounded-md"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
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
              <input
                placeholder="Email"
                type="email"
                className="p-2 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <button
                className="bg-[#008080] p-2 rounded-xl mt-2 text-white hover:bg-blue-500 transition ease-in-out"
                onClick={handleSubmit}
              >
                Register
              </button>
              <div className="mt-2 text-center">
                <span>
                  Not registered?{" "}
                  <Link
                    to={"/register"}
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
