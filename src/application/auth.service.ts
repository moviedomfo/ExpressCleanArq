  import axios, { AxiosResponse } from "axios";

const urlAuth0 = `https://pelsoftmfo.auth0.com/oauth/token`;
const bodyAuth =  {
    client_id: "3kjPf8hFCi6HlA6ZYErvmRrV2YuXqQhv",
    client_secret:"As3Oy0_JxG5KC20RW5Je-I5M1m4TsvPM_Jgyug33VIDDpLTY6iUqvyDo-jPaLbEZ",
    audience:"https://celamltda.com.ar",
    grant_type:"client_credentials"
    };  

export const authenticate1 = async () => {
  axios.post(urlAuth0, bodyAuth).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
};


export const authenticate2 = async (): Promise<string> => {

  let res: AxiosResponse = await axios.post(urlAuth0, 
    bodyAuth,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );

  if (res.status == 200) {
    console.log(res.status);
  }

  return res.data;
}
