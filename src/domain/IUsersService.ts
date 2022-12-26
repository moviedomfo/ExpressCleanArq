import { getUserBodyDto, User } from './models/fake.model';


export interface IUsersService {
  /**
   * Get server info
   */
    GetUsers(body: getUserBodyDto): Promise<User[]>;
}
