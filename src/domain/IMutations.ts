import { MutationDto } from "domain/models/MutationDto";

export interface IMutaionVerifier{
 /**
  * Verify
  */
  Verify(req: MutationDto) :Promise<boolean> ;
    
 
}