import { IInfoService } from "domain/IInfo";
import { EnviropmentInfo } from "./../domain/models/info.model";

const os = require("os");

export class InfoService implements IInfoService{
  

  public  GetInfo = async (): Promise<EnviropmentInfo> => {
  let info: EnviropmentInfo = new EnviropmentInfo();
  info.AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
  info.AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
  info.NODE_ENV = process.env.NODE_ENV;
  info.ExpressPort = Number(process.env.PORT);
  info.AUTH0_DOMAIN = process.env.AUTH0_AUDIENCE;
  info.Server_Name = process.env.SERVER_NAME;
  info.Server_IPs = getIp();

  return info;
}
}



const getIp = (): [any] => {
  const interfaces = os.networkInterfaces();
  let addresses: [any] = [''];
  for (let k in interfaces) {
    for (let k2 in interfaces[k]) {
      const address = interfaces[k][k2];
      if (address.family === "IPv4" && !address.internal) {
        addresses.push(address.address);
      }
    }
  }
  return addresses;
};
