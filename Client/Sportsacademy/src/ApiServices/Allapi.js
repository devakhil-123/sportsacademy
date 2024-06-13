import base_url from "./base_url"
import commonApi from "./commonapi"


export const getstudents=async (header)=>{
    return await commonApi(header,"",`${base_url}/students/`,"GET")
}
export const getevents=async(header)=>{
    return await commonApi(header,`${base_url}/events/`,"GET")
}