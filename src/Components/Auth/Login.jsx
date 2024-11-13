import React, { useState } from "react";

function Login({HandleLogin}) {
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    HandleLogin(email,Password)

    setemail(" ");
    setPassword("");
  };

  return (
    <div className="bg-black w-full h-screen text-white flex justify-center items-center">
      <div className="p-3 bg-zinc-800   rounded-md w-[20vw] h-[70vh] shadow-lg">
        <h1 className=" font-bold text-2xl">Log In</h1>
        <div className=" w-full h-[45vh] flex flex-col justify-center mt-14">
          <form
            onSubmit={(e) => {
              SubmitHandler(e);
            }}
            className="flex flex-col gap-5 "
          >
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              required
              className="bg-transparent p-3 rounded-full border-2 border-red-400 outline-none"
              type="email"
              placeholder="Enter E-Mail"
            />
            <input
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-transparent p-3 rounded-full border-2 border-red-400 outline-none"
              type="Password"
              placeholder="Enter Password"
            />
            <div className="flex gap-2 mt-4">
              <input className="w-4" type="Checkbox" />{" "}
              <h1 className="text-lg">Remember me</h1>{" "}
              <h1 className="ml-20 text-red-400 font-semibold text-lg">
                Forget Password
              </h1>
            </div>
            <button className="w-full h-14 flex items-center justify-center font-bold text-2xl bg-red-400 rounded-full mt-12">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
