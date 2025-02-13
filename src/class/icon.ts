class Icon {
    icon_id: string;
    icon_name: string;
    icon_url: string;

    constructor(id: string, name: string, url: string) {
        this.icon_id = id;
        this.icon_name = name;
        this.icon_url = url;
    }
}

export default Icon