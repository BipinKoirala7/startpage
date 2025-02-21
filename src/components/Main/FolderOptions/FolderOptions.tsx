import "../../../App.css";

import { type folderT } from "../../../types";
import FolderUI from "../../UI/FolderUI";
import ScrollForwardBtn from "./ScrollForwardBtn";
import ScrollBackBtn from "./ScrollBackBtn";

function FolderOptions() {
  const FolderOptions: folderT[] = [
    {
      folder_id: "1",
      folder_name: "ICP",
      folder_description: "Description for ICP",
      folder_icon_url: "",
      folder_background_color: "default",
      created_At: new Date("2023-01-01T17:57:00.000Z"),
      updated_At: null,
    },
    {
      folder_id: "2",
      folder_name: "Football",
      folder_description: "Description for Football",
      folder_icon_url: "",
      folder_background_color: "default",
      created_At: new Date("2023-02-01T17:57:00.000Z"),
      updated_At: null,
    },
    {
      folder_id: "3",
      folder_name: "Social Media",
      folder_description: "Description for Social Media",
      folder_icon_url: "https://s2.svgbox.net/flags-hd.svg?ic=np",
      folder_background_color: "default",
      created_At: new Date("2023-03-01T17:57:00.000Z"),
      updated_At: null,
    },
    {
      folder_id: "4",
      folder_name: "Programming",
      folder_description: "Description for Programming",
      folder_icon_url: "",
      folder_background_color: "default",
      created_At: new Date("2023-04-01T17:57:00.000Z"),
      updated_At: null,
    },
    {
      folder_id: "5",
      folder_name: "Basketball",
      folder_description: "Description for Basketball",
      folder_icon_url: "",
      folder_background_color: "default",
      created_At: new Date("2023-05-01T17:57:00.000Z"),
      updated_At: null,
    },
    {
      folder_id: "6",
      folder_name: "Dating",
      folder_description: "Description for Dating",
      folder_icon_url: "",
      folder_background_color: "default",
      created_At: new Date("2023-06-01T17:57:00.000Z"),
      updated_At: null,
    },
    {
      folder_id: "7",
      folder_name: "Facebook",
      folder_description: "Description for Facebook",
      folder_icon_url: "",
      folder_background_color: "default",
      created_At: new Date("2023-07-01T17:57:00.000Z"),
      updated_At: null,
    },
    {
      folder_id: "8",
      folder_name: "Youtube",
      folder_description: "Description for Youtube",
      folder_icon_url: "",
      folder_background_color: "default",
      created_At: new Date("2023-08-01T17:57:00.000Z"),
      updated_At: null,
    },
    {
      folder_id: "9",
      folder_name: "Web Dev",
      folder_description: "Description for Web Dev",
      folder_icon_url: "",
      folder_background_color: "default",
      created_At: new Date("2023-09-01T17:57:00.000Z"),
      updated_At: null,
    },
  ];

  return (
    <div
      className="relative flex gap-4 overflow-x-auto max-w-full px-12
        sm:
        md:
        lg:
        xl:
        "
    >
      <ScrollBackBtn />
      <div
        id="folderOptions-container"
        className=" flex gap-4 overflow-x-auto max-w-full p-2
        sm:
        md:
        lg:
        xl:
        "
      >
        {FolderOptions.map((item) => {
          const { folder_id } = item;
          const className = ``;
          return (
            <FolderUI
            key={folder_id}
            className={className}
            folder_info={item}
            />
          );
        })}
      </div>
        <ScrollForwardBtn />
    </div>
  );
}

export default FolderOptions;
