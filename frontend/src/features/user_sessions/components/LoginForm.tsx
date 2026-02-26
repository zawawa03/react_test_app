import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import signInUser from "../hooks/login_user";

export default function LoginForm() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    }

    try {
      await signInUser(formData)
      console.log("ログインしました");
      navigate("/top_page");
    } catch (errors) {
      console.log(errors);
    }
  }

  return (
    <div className="h-screen w-full flex justify-center">
      <div className="flex flex-col justify-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-xl font-bold mb-3">ログイン</legend>
        <form onSubmit={handleSubmit}>

          <label className="label">メールアドレス</label>
          <input
            type="email"
            name="email"
            className="input"
            value={email}
            onChange={onChangeEmail}
            />

          <label className="label">パスワード</label>
          <input
            type="password"
            name="password"
            className="input"
            value={password}
            onChange={onChangePassword}
            autoComplete="current-password"
            />
          <button type="submit" className="btn btn-neutral mt-4">
            ログイン
          </button>  
        </form>
      </fieldset>
      <Link to="/sign_up" className="btn btn-neutral mt-3">
        新規登録
      </Link>
      </div>
    </div>
  )
}