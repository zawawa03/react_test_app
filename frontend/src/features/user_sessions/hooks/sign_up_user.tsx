import type { User } from "../../../types/user";
import axios from "axios";

export default async function signUpUser(props: User) {
  try {
  const response = await axios.post(
    "http://localhost:3000/v1/auth",
    props
  )

  const headers = response.headers

  const accessToken = headers["access-token"]
  const client = headers["client"]
  const uid = headers["uid"]

  localStorage.setItem("access-token", accessToken)
  localStorage.setItem("client", client)
  localStorage.setItem("uid", uid)

  return response.data
} catch (error: any) {
  throw error.response?.data?.errors || ["登録に失敗しました"]
}};