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
  created_at: string;
  updated_at: string ;
};

export type linkT = {
  link_id: string;
  folder_id: string;
  link_name: string;
  link_icon_url: string | null;
  link_background_color: string | null;
  link_url: string;
  created_at: string;
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

export type noteT = {
  user_id: string;
  note_id: string;
  note_title: string;
  note_content: string;
  created_at: string;
  updated_at: string;
};

export type todoListT = {
  user_id: string,
  todo_list_id: string,
  todo_list_title: string,
  created_at: string,
  updated_at: string,
}

export type todoT = {
  user_id: string;
  todo_list_id: string;
  todo_id: string;
  todo_description: string;
  created_at: string;
};

export type patchMethod = {
  changeProperty: string;
  new_value: string;
}

export type apiResponseT<T> = {
  error: boolean;
  data: T | null;
  statusCode: number;
  message: string;
};

export type tokenT = {
  token: string;
}

export type iconUrlT = {
  favicon: string | null;
  image:string | null;
}