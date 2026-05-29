function Skills() {
  return (
    <div className="min-h-screen bg-[#F7F4EF] p-10">

      <h1 className="text-5xl font-black text-[#1E1B4B]">
        Skill Mirror
      </h1>

      <p className="text-gray-600 mt-4">
        Compare your current skills with industry requirements.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white p-6 rounded-[28px] shadow-md">
          <h2 className="text-xl font-bold text-[#1E1B4B]">
            React
          </h2>

          <p className="text-green-600 mt-3 font-semibold">
            Strong Skill
          </p>
        </div>

        <div className="bg-white p-6 rounded-[28px] shadow-md">
          <h2 className="text-xl font-bold text-[#1E1B4B]">
            Node.js
          </h2>

          <p className="text-orange-500 mt-3 font-semibold">
            Need Improvement
          </p>
        </div>

        <div className="bg-white p-6 rounded-[28px] shadow-md">
          <h2 className="text-xl font-bold text-[#1E1B4B]">
            MongoDB
          </h2>

          <p className="text-red-500 mt-3 font-semibold">
            Missing Skill
          </p>
        </div>

      </div>

    </div>
  )
}

export default Skills