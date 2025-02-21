export type svgPropT = {
  fill: string;
  stroke: string;
  className: string;
};

export type folderT = {
  folder_id: string;
  folder_name: string;
  folder_description: string;
  folder_icon_url: string | null;
  folder_background_color: string | undefined;
  created_At: Date;
  updated_At: Date | null;
};

export type linkT = {
  link_id: string;
  folder_id: string;
  link_name: string;
  link_icon_url: string | null;
  link_background_color: string | null;
  link_url: string;
  created_At: Date;
};
