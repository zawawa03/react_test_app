export default function LoginCheck() {
  const token = localStorage.getItem("access-token")
  const client = localStorage.getItem("client")
  const uid = localStorage.getItem("uid")

  return token && client && uid
}