import { ApiEntity } from "../../api";

export interface User extends ApiEntity {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
