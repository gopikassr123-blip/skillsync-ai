import { Link } from "react-router-dom"
import { Sparkles } from "lucide-react"

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#070014] text-white relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] top-[-120px] right-[-80px]" />
      <div className="absolute w-[430px] h-[430px] bg-fuchsia-500/25 rounded-full blur-[110px] bottom-[-100px] left-[-90px]" />

      <div className="relative w-full max-w-md rounded-[34px] border border-purple-300/30 bg-white/[0.08] backdrop-blur-2xl shadow-[0_0_70px_rgba(168,85,247,0.28)] px-8 py-10">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-300/30 flex items-center justify-center">
            <Sparkles className="text-purple-300" />
          </div>

          <h2 className="text-sm tracking-[0.3em] text-purple-200 mt-5">
            SKILLSYNC AI
          </h2>

          <h1 className="text-3xl font-bold mt-7">
            Welcome Back
          </h1>
        </div>

        <div className="mt-8">
          <label className="text-purple-100 text-sm">Email address</label>
          <input
            type="email"
            className="w-full mt-3 px-5 py-4 rounded-xl bg-transparent border border-purple-200/60 text-white outline-none"
          />
        </div>

        <div className="mt-5">
          <label className="text-purple-100 text-sm">Password</label>
          <input
            type="password"
            className="w-full mt-3 px-5 py-4 rounded-xl bg-transparent border border-purple-200/60 text-white outline-none"
          />
        </div>

        <p className="mt-4 text-purple-100/70 text-sm">
          Forget Password ?
        </p>

        <Link
          to="/dashboard"
          className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-violet-600 text-white text-lg font-bold flex items-center justify-center"
        >
          Login
        </Link>

        <p className="text-center text-purple-100/70 mt-12 text-sm">
          Are You New Member ?{" "}
          <Link to="/register" className="font-bold text-white">
            Sign UP
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login