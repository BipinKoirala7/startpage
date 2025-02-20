export type svgPropT = {
  fill: string;
  stroke: string;
  className: string;
};

export type folderT = {
  folder_id: string;
  folder_name: string;
  folder_description: string;
  folder_icon_url: string;
  folder_background_color: string;
  created_At: Date;
  updated_At: Date;
};

export type linkT = {
  link_id: string;
  folder_id: string;
  link_name: string;
  link_placeholder: string;
  link_icon_url: string;
  link_background_color: string;
  link_url: string;
  created_At: Date;
};
