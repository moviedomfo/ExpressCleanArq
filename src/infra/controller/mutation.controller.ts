import { IMutaionVerifier } from 'domain/IMutations';
import { Request, Response } from 'express';

export default class MutationController {
  public readonly _repo: IMutaionVerifier;

  constructor(repo: IMutaionVerifier) {
    this._repo = repo;
  }

  //** Virify the adn string */
  public Verify = async ({ body }: Request, res: Response) => {
    //req:MutationDto

    try {
      // const body: MutationDto = req.body as MutationDto;
      const { dna } = body;
      const result = await this._repo.Verify({ dna });

      res.status(200).send(result);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };
}
