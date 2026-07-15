import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CreatePost from "./components/CreatePost";
import ViewAll from "./components/ViewAll";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={<CreatePost />} /> 
        <Route path="/viewall" element={<ViewAll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;