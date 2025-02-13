class folder {
    folder_id: string;
    folder_name: string;
    folder_description: string;
    folder_icon_id: string;
    folder_background_color: string;
    created_At: Date;

    constructor(id:string,name:string,description:string,icon_id:string,background_color:string,created_At:Date) {
        this.folder_id = id;
        this.folder_name = name;
        this.folder_icon_id = icon_id;
        this.folder_description = description;
        this.folder_background_color = background_color;
        this.created_At = created_At;
    }
}

export default folder