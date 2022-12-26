import { IItemsService } from 'domain/IItemsService';
import { BaseItem } from 'domain/models/item.interface';
import {Request,Response} from "express";

export default class ItemsController {

  public readonly _repo:IItemsService;

  constructor(repo: IItemsService) {
    this._repo= repo;
  }
  public FindAll = async (req:Request, res:Response) => {

    const result = await  this._repo.FindAll();

    res.send(result)

    
  }

  public Find = async (req:Request, res:Response) => {

  const id: number = parseInt(req.params.id);
  // let id :number ;
  // parseInt(req.params.id,id) ;
  try {
  const result = await  this._repo.Find(id);
      if (result) res.status(200).send(result);
      else   res.status(404).send("item not found");
 } catch (e) {
    res.status(500).send(e.message);
  }
  }

  public Create = async (req:Request, res:Response) => {

    const item: BaseItem = req.body;  // let id :number ;
  // parseInt(req.params.id,id) ;
  try {

      const result = await  this._repo.Create(item);
      if (result) res.status(200).send(result);
      else   res.status(404).send("item not found");
 } catch (e) {
    res.status(500).send(e.message);
  }
  }

}


