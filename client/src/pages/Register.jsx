import { Link } from "react-router-dom"

function Register() {
  return (
    <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md p-8 rounded-[30px] shadow-xl border border-orange-100">

        <h1 className="text-3xl font-black text-[#1E1B4B]">
          Create account
        </h1>

        <p className="text-gray-500 mt-2">
          Start your AI career analysis.
        </p>

        <input
          className="w-full mt-8 px-4 py-4 rounded-2xl border border-gray-200 outline-none"
          placeholder="Full Name"
        />

        <input
          className="w-full mt-4 px-4 py-4 rounded-2xl border border-gray-200 outline-none"
          placeholder="Email"
        />

        <input
          className="w-full mt-4 px-4 py-4 rounded-2xl border border-gray-200 outline-none"
          placeholder="Password"
          type="password"
        />

        <Link
          to="/onboarding"
          className="w-full mt-6 bg-[#FF6B4A] text-white py-4 rounded-2xl font-bold flex items-center justify-center"
        >
          Create Account
        </Link>

      </div>

    </div>
  )
}

export default Register