export interface User
{
   name: string;
   roles: string[];
   picture: string;
}

export interface UserLogin {
  username: string;
  password: string;
}
