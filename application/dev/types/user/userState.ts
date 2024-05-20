import { User } from "./User";

export interface UserState {
  loading: boolean;
  err: boolean | string;
  user: User | null;
}
