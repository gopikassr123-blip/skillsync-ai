import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center px-6">
      <div className="bg-white w-full max-w-md p-8 rounded-[30px] shadow-xl border border-orange-100">
        <h1 className="text-3xl font-black text-[#1E1B4B]">
          Welcome back
        </h1>

        <p className="text-gray-500 mt-2">
          Login to continue your career journey.
        </p>

        <input
          className="w-full mt-8 px-4 py-4 rounded-2xl border border-gray-200 outline-none"
          placeholder="Email"
        />

        <input
          className="w-full mt-4 px-4 py-4 rounded-2xl border border-gray-200 outline-none"
          placeholder="Password"
          type="password"
        />

        <Link
          to="/dashboard"
          className="w-full mt-6 bg-[#FF6B4A] text-white py-4 rounded-2xl font-bold flex items-center justify-center"
        >
          Login
        </Link>

        <p className="text-center text-gray-500 mt-6">
          New user?{" "}
          <Link to="/register" className="text-[#FF6B4A] font-bold">
            Create account
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login