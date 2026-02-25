import { Link } from "react-router-dom";

export default function LoginForm() {

  return (
    <div className="h-screen w-full">
      <Link to="/sign_up">
        <button className="btn btn-wide btn-neutral absolute bottom-3/4 left-1/2 -translate-x-1/2">
          新規登録
        </button>
      </Link>
    </div>
  )
}