export interface User {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export type LoginFormData = Omit<User, "name" | "password_confirmation">;