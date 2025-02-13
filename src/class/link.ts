import axios from "axios";
import { baseUrl } from "../types";

class Link {
    link_id: string;
    folder_id: string;
    link_name: string;
    link_placeholder: string;
    link_icon_id: string;
    link_background_color: string;
    created_At: string;
    
    constructor(id: string, folder_id: string, name: string, placeholder: string, icon_id: string, background_color: string, created_At: string) {
        this.link_id = id;
        this.folder_id = folder_id;
        this.link_name = name;
        this.link_placeholder = placeholder;
        this.link_icon_id = icon_id;
        this.link_background_color = background_color;
        this.created_At = created_At;
    }

    async create(linkObj:Link) {
        try {
            const response = await axios.post(baseUrl + `links/create`, linkObj);
            return await response.data;
        } catch  {
            throw new Error("An error occured while creating a link")
        }
    }
}

export default Link