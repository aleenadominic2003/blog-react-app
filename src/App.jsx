import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;