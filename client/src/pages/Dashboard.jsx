import { FileText, Map, Target, User } from "lucide-react"
import { Link } from "react-router-dom"

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F7F4EF] flex">

      <aside className="w-72 bg-[#1E1B4B] text-white p-6 hidden md:block">
        <h1 className="text-2xl font-black mb-10">
          SkillSync AI
        </h1>

        <div className="space-y-4">
          <Link to="/dashboard" className="block bg-white/10 p-3 rounded-xl">
            Dashboard
          </Link>

          <Link to="/resume" className="block p-3 rounded-xl hover:bg-white/10">
            Resume Intelligence
          </Link>

          <Link to="/skills" className="block p-3 rounded-xl hover:bg-white/10">
            Skill Mirror
          </Link>

          <Link to="/roadmap" className="block p-3 rounded-xl hover:bg-white/10">
            Career GPS
          </Link>

          <p className="p-3 rounded-xl text-white/50">
            Interview Arena
          </p>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black text-[#1E1B4B]">
              Career Command Center
            </h1>

            <p className="text-gray-600 mt-2">
              Welcome back! Track your career growth here.
            </p>
          </div>

          <div className="bg-white p-3 rounded-2xl shadow-md">
            <User className="text-[#FF6B4A]" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-[28px] shadow-md">
            <FileText className="text-[#FF6B4A]" />
            <p className="text-gray-500 mt-4">Resume Score</p>
            <h2 className="text-4xl font-black text-[#FF6B4A] mt-2">82%</h2>
          </div>

          <div className="bg-white p-6 rounded-[28px] shadow-md">
            <Target className="text-[#1E1B4B]" />
            <p className="text-gray-500 mt-4">Skill Match</p>
            <h2 className="text-4xl font-black text-[#1E1B4B] mt-2">76%</h2>
          </div>

          <div className="bg-white p-6 rounded-[28px] shadow-md">
            <Map className="text-green-600" />
            <p className="text-gray-500 mt-4">Roadmap Progress</p>
            <h2 className="text-4xl font-black text-green-600 mt-2">42%</h2>
          </div>
        </div>

        <div className="bg-white rounded-[30px] shadow-md p-8 mt-10 border border-orange-100">
          <h2 className="text-2xl font-black text-[#1E1B4B]">
            Resume Intelligence
          </h2>

          <p className="text-gray-500 mt-2">
            Upload your resume and let AI analyze your ATS score and missing skills.
          </p>

          <div className="mt-6 border-2 border-dashed border-orange-200 rounded-[24px] p-10 text-center bg-[#FFF8F5]">
            <FileText className="mx-auto text-[#FF6B4A]" size={42} />

            <h3 className="font-bold text-[#1E1B4B] mt-4">
              Drop your resume here
            </h3>

            <p className="text-gray-500 mt-2">
              PDF format recommended
            </p>

            <Link
              to="/resume"
              className="inline-block mt-5 bg-[#FF6B4A] text-white px-6 py-3 rounded-2xl font-bold"
            >
              Upload Resume
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard