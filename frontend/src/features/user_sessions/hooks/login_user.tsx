import type { LoginFormData } from "../../../types/user";
import axios from "axios";

export default async function signInUser(props: LoginFormData) {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/sign_in",
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
    throw error.response?.data?.errors || ["ログインに失敗しました"]
  };
};