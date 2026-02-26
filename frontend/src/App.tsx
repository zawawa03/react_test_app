import './index.css';
import { Route, Routes } from "react-router-dom";
import TopPage from "./pages/home/top_page";
import LoginPage from "./pages/user_sessions/login_page";
import RegistrationPage from "./pages/user_sessions/regstration_page";
import AfterLoginTopPage from "./pages/home/after_login_top_page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/top_page" element={<AfterLoginTopPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign_up" element={<RegistrationPage />} />
    </Routes>
  );
}

export default App
