import LoginForm from "../../features/user_sessions/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="w-full flex justify-center" data-theme="caramellatte">
      <div className="w-[480px] h-screen">
        <LoginForm />
      </div>
    </div>
  )
}