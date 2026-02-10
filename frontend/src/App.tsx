import './index.css';
import { Route, Routes } from "react-router-dom";
import TopPage from "./pages/home/top_page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
    </Routes>
  );
}

export default App
