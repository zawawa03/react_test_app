import LogoutUser from "../hooks/logout_user";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {

    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        await LogoutUser();
        console.log("ログアウトしました")
        navigate("/");
      } catch (errors) {
        console.log(errors);
      }
    }

    return (
      <button onClick={handleLogout} className="btn btn-neutral">
        ログアウト
      </button>
    )
}
