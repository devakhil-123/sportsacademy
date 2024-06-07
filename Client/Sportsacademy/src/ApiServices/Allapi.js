import base_url from "./base_url"
import commonApi from "./commonapi"


export const getstudents=async()=>{
    return await commonApi("","",`${base_url}/students/`,"GET")
}