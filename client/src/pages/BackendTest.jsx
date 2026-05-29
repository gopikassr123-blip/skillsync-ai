import { useEffect, useState } from "react"
import axios from "axios"

function BackendTest() {

  const [message, setMessage] = useState("Loading...")

  useEffect(() => {

    axios.get("http://localhost:5000")
      .then((res) => {
        setMessage(res.data.message)
      })
      .catch(() => {
        setMessage("Backend connection failed")
      })

  }, [])

  return (
    <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center">

      <h1 className="text-4xl font-black text-[#1E1B4B]">
        {message}
      </h1>

    </div>
  )
}

export default BackendTest