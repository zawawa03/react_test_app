import top_page_image from "../../assets/image/Find_Landscape.png";
import { Link } from "react-router-dom";

export default function TopPage() {
  return (
    <div className="w-full flex justify-center" data-theme="caramellatte">
      <div className="w-[480px] ralative h-screen bg-[length:auto_100%] bg-center bg-no-repeat" style={{ backgroundImage: `url(${top_page_image})` }}>
        <Link to="/login">
          <button className="btn btn-wide btn-neutral absolute bottom-3/4 left-1/2 -translate-x-1/2">ログイン</button>
        </Link>  
      </div>
    </div>
  )
}