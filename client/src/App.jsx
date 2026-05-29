import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Onboarding from "./pages/Onboarding"
import Resume from "./pages/Resume"
import Skills from "./pages/Skills"
import Roadmap from "./pages/Roadmap"
import Interview from "./pages/Interview"
import Chatbot from "./pages/Chatbot"
import MockInterview from "./pages/MockInterview"
import JDMatcher from "./pages/JDMatcher"
import BackendTest from "./pages/BackendTest"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/mock-interview" element={<MockInterview />} />
        <Route path="/jd-match" element={<JDMatcher />} />
        <Route path="/backend-test" element={<BackendTest />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App