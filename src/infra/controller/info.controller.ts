import { IInfoService } from './../../domain/IInfo';
import {Request,Response} from "express";

export default class InfoController {

  public readonly _repo:IInfoService;

  constructor(repo: IInfoService) {
    this._repo= repo;
  }

  public GetInfo = async (req:Request, res:Response) => {


    try {
    // const items: EnviropmentInfo = await infoService.get();
    const response = await  this._repo.GetInfo();

    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
  };
}


