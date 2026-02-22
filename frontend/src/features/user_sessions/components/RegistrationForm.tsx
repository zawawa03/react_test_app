import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import signUpUser from "../hooks/sign_up_user";

export default function SignUpForm() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPasswordConfirmation] = useState("")

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const onChangePasswordConfirmation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmation(e.target.value);
  }

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
      password_confirmation,
    }

    await signUpUser(formData)
    navigate("/");
  }
  
  return (
    <div className="sign_up_page h-screen bg-primary-content">
      <h2>新規登録</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="name_form">
          <label>名前</label>
          <input 
            type="text"
            name="name"
            className="input"
            value={name}
            onChange={onChangeName}
          />  
        </div>
        <div className="email_form">
          <label>メールアドレス</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={onChangeEmail}
          />  
        </div>
        <div className="password_form">
          <label>パスワード</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={onChangePassword}
          />  
        </div>
        <div className="password_confirm_form">
          <label>パスワード確認</label>
          <input
            type="text"
            name="password_confirmation"
            value={password_confirmation}
            onChange={onChangePasswordConfirmation}
          />  
        </div>
        <button type="submit" className="button">
          登録する
        </button>
      </form>
      <Link to="/login">
        <button className="">ログイン</button>
      </Link>
    </div>
  )

}

