import { getUserBodyDto, User } from "../domain/models/fake.model";
import axios, { AxiosResponse } from "axios";
import { IUsersService } from "domain/IUsersService";

export default class UsersService implements IUsersService {

   public GetUsers = async (body: getUserBodyDto): Promise<User[]> => {
    let url = `https://reqres.in/api/users?page=${body.page}`;
    return await axios.get(url).then(
      (response) => {
        return response.data.data;
      },
      (error) => {
        return error;
      }
  );
};


}

