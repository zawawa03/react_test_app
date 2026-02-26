import axios from "axios";

export default async function LogoutUser() {

  const accessToken = localStorage.getItem("access-token")
  const client = localStorage.getItem("client")
  const uid = localStorage.getItem("uid")

  try {
    await axios.delete(
      "http://localhost:3000/auth/sign_out", {
      headers: {
        "access-token": accessToken,
        "client": client,
        "uid": uid,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }}
    )

  } catch (error: any) {
    throw error.response?.data?.errors || ["ログアウトに失敗しました"]
  } finally {
    localStorage.removeItem("access-token");
    localStorage.removeItem("client");
    localStorage.removeItem("uid");
  }
};