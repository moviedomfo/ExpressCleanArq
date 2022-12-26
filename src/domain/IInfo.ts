import { EnviropmentInfo } from './models/info.model';

export interface IInfoService {
  /**
   * Get server info
   */
    GetInfo(): Promise<EnviropmentInfo>;
}
