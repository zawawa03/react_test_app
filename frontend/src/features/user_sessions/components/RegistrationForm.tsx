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
    
    try {
      console.log(`${formData}`)
      await signUpUser(formData)
      navigate("/");
    } catch (errors) {
      console.log(errors);
    };
  };
  
  return (
    <div className="sign_up_page h-screen flex justify-center">
      <div className="flex flex-col justify-center">
      <h2 className="text-neutral text-xl font-bold mb-3">新規登録</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="name_form flex flex-col">
          <label>名前</label>
          <input 
            type="text"
            name="name"
            className="input my-2"
            value={name}
            onChange={onChangeName}
          />  
        </div>
        <div className="email_form flex flex-col">
          <label>メールアドレス</label>
          <input
            type="email"
            name="email"
            className="input my-2"
            value={email}
            onChange={onChangeEmail}
          />  
        </div>
        <div className="password_form flex flex-col">
          <label>パスワード</label>
          <input
            type="password"
            name="password"
            className="input my-2"
            value={password}
            autoComplete="new-password"
            onChange={onChangePassword}
          />  
        </div>
        <div className="password_confirm_form flex flex-col">
          <label>パスワード確認</label>
          <input
            type="password"
            name="password_confirmation"
            className="input my-2"
            value={password_confirmation}
            autoComplete="new-password"
            onChange={onChangePasswordConfirmation}
          />  
        </div>
        <button type="submit" className="btn btn-sm mt-3">
          登録する
        </button>
      </form>
      <Link to="/login" className="btn btn-sm mt-3">
        ログイン
      </Link>
      </div>
    </div>
  )

}

