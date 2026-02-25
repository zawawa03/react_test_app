import SignUpForm from "../../features/user_sessions/components/RegistrationForm";

export default function RegistrationPage() {
    return (
      <div className="w-full flex justify-center" data-theme="caramellatte">
        <div className="w-[480px] h-screen">
          <SignUpForm />
        </div>
      </div>
    )
}