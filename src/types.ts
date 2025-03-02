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
  created_At: string;
  updated_At: string | null;
};

export type linkT = {
  link_id: string;
  folder_id: string;
  link_name: string;
  link_icon_url: string | null;
  link_background_color: string | null;
  link_url: string;
  created_At: string;
};

export type userT = {
  user_id: string;
  provider_id: string | null;
  provider: string | null;
  email: string;
  username: string;
  password: string | null;
  user_img: string | null;
  created_at: string;
};

export type apiResponseT<T> = {
  error: boolean;
  data: T | null;
  statusCode: number;
  message: string;
};

export type tokenT = {
  token: string;
}