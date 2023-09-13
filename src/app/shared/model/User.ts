export interface UserDTO {
  id: number;
  username: string;
  email: string;
  roles: UserRole;
}

export enum UserRole {
  Admin = "Admin",
  User = "User",
}

export interface AuthDTO {
  token: string;
  user: UserDTO;
}
