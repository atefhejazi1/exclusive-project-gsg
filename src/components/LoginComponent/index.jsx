import React, { useContext, useState } from "react";
import SignUpImage from "../../assets/signup/signup.png";
import SignUpGoogle from "../../assets/signup/Google SIgn up.png";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Index = () => {
  const { setToken, setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        throw new Error(`Login failed: ${res.status}`);
      }

      const data = await res.json();
      if (!data.token) throw new Error("No token received");

      localStorage.setItem("auth_token", data.token);
      setToken(data.token);
      setUser({ username });

      navigate("/account");
    } catch (err) {
      console.error(err);
      setError("فشل تسجيل الدخول — تأكد من اسم المستخدم/كلمة المرور.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col md:flex-row max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 md:pt-20">
      <div className="w-full md:w-1/2 bg-[#CCE5E9] flex items-center justify-center p-4 md:p-0 md:block hidden sm:block">
        <img
          src={SignUpImage}
          alt="Sign Up"
          className="object-cover w-full h-auto max-h-96 md:max-h-full"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-10 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
          Log in to Exclusive
        </h2>
        <p className="text-center md:text-left">Enter your details below</p>

        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Email or Phone Number"
            className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2 px-1"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2 px-1"
          />

          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className=" bg-red-600 text-white py-3 px-10   hover:bg-red-700 transition-colors font-medium"
              disabled={loading}
            >
              {loading ? "progress..." : "Login"}
            </button>

            <a href="#">Forget Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
