import { Routes, Route } from "react-router-dom";
import Welcome from "./routes/Welcome";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/plan-your-day" element={<Welcome />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
