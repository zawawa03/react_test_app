import LogoutButton from "../../features/user_sessions/components/LogoutButton"

export default function AfterLoginTopPage() {
    return (
      <div className="w-full flex justify-center" data-theme="caramellatte">
        <div className="w-[480px] h-screen">
          <div>ログインしています</div>
          <LogoutButton />
        </div>  
      </div>
    )
}