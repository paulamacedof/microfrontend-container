export interface UserRequest {
  email: string;
  password: string;
}

export interface UserResponse {
  username: string;
  email: string;
  password: string;
  id: string;
}
