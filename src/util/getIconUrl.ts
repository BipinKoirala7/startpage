import { apiResponseT, iconUrlT } from "../types";

type getUrlPropsT={
    url:string
}

async function getUrl({url}:getUrlPropsT){
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/iconUrl/${url}`);
        const result:apiResponseT<iconUrlT> = await response.json();
        if(!result.error) throw new Error(result.message);
        return result

    } catch (error:any) {
        throw new Error(error.message);
    }
}

export { getUrl }