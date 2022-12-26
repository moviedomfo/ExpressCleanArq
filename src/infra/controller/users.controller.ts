import { IUsersService } from "domain/IUsersService";
import { Request, Response } from "express";
import { getUserBodyDto } from "domain/models/fake.model";

export default class UsersController {
  public readonly _repo: IUsersService;

  constructor(repo: IUsersService) {
    this._repo = repo;
  }

  public GetUsers = async ({ body }: Request, res: Response) => {
    try {
      //const body: getUserBodyDto = req.body as getUserBodyDto;
      const dto: getUserBodyDto = body as getUserBodyDto;
      const result = await this._repo.GetUsers(dto);
      res.status(200).send(result);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };
}
