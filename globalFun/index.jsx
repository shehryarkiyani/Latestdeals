import { getCookie } from "cookies-next";
export const SetUser=async(dispatch)=>{
   
    const jwt = getCookie("token");
    localStorage.setItem("token",JSON.stringify(jwt))
    const axios = require("axios");
    if (jwt) {

        let url=`${process.env.NEXT_PUBLIC_API_URL}/users/me`
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: url,
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        };
        axios
        .request(config)
        .then((response) => {
          console.log("RES", response.data);
          dispatch(loginUser(response.data.user));
        })
        .catch((error) => {
          console.log(error);
        });
    }
}