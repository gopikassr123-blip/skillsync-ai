import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

function Onboarding() {
  return (
    <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center px-6 py-10">

      <div className="bg-white w-full max-w-3xl rounded-[32px] shadow-xl border border-orange-100 p-10">

        <p className="text-[#FF6B4A] font-bold text-lg">
          Career Setup
        </p>

        <h1 className="text-5xl font-black text-[#1E1B4B] mt-4 leading-tight">
          Let AI understand your career goals 🚀
        </h1>

        <p className="text-gray-500 mt-4 text-lg">
          Fill your details to generate a personalized roadmap.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div>
            <label className="font-semibold text-[#1E1B4B]">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-3 px-4 py-4 rounded-2xl border border-gray-200 outline-none"
            />
          </div>

          <div>
            <label className="font-semibold text-[#1E1B4B]">
              Current Degree
            </label>

            <input
              type="text"
              placeholder="B.E CSE"
              className="w-full mt-3 px-4 py-4 rounded-2xl border border-gray-200 outline-none"
            />
          </div>

          <div>
            <label className="font-semibold text-[#1E1B4B]">
              Skills
            </label>

            <input
              type="text"
              placeholder="HTML, CSS, JavaScript"
              className="w-full mt-3 px-4 py-4 rounded-2xl border border-gray-200 outline-none"
            />
          </div>

          <div>
            <label className="font-semibold text-[#1E1B4B]">
              Dream Role
            </label>

            <input
              type="text"
              placeholder="Full Stack Developer"
              className="w-full mt-3 px-4 py-4 rounded-2xl border border-gray-200 outline-none"
            />
          </div>

        </div>

        <Link
          to="/dashboard"
          className="mt-10 bg-[#FF6B4A] hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-bold shadow-lg flex items-center gap-3 w-fit"
        >
          Generate My Career Plan
          <ArrowRight size={22} />
        </Link>

      </div>

    </div>
  )
}

export default Onboarding