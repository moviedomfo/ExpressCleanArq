import { BaseItem, Item } from "./models/item.interface";

export interface IItemsService {
 /**
  * FindAll items
  */
  FindAll() :Promise<Item[]> ;
    
  Find(id: number) :Promise<Item> ;
  Create  (newItem: BaseItem): Promise<Item> ;
  Update  ( id: number, itemUpdate: BaseItem): Promise<Item | null> ;
  Remove  (id: number): Promise<null | void>;
}