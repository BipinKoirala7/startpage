import { useQuery } from "@tanstack/react-query";
import useFolderStore from "../../../store/folderStore";
import useLinkStore from "../../../store/linkStore";

import BigButton from "../../UI/Buttons/BigButton";
import { apiResponseT, linkT } from "../../../types";
import { useEffect } from "react";
import SkeletonUI from "../../UI/SkeletonUI";

function LinksContainer() {
  const selected_folder = useFolderStore((state) => state.selectedFolder);
  const links = useLinkStore((state) => state.links);
  const loadLinks = useLinkStore((state) => state.loadLinks);

  const { isLoading, data, isError } = useQuery<apiResponseT<linkT[]>>({
    queryKey: ["links", selected_folder?.folder_id],
    queryFn: async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_API_URL}/links/${selected_folder?.folder_id}`
        );
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const data: apiResponseT<linkT[]> = await response.json();
        if (data.error) throw new Error(data.message);
        return data;
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          throw new Error("An unknown error occurred");
        }
      }
    },
    enabled: selected_folder !== null,
  });

  useEffect(() => {
    if (data) {
      if( data.data === null) loadLinks([])
      else loadLinks(data.data);
    }
  }, [data, loadLinks, selected_folder]);

  if (isError) return <div>{data?.message}</div>
  if (isLoading)
    return (
      <div className="w-full  flex gap-4 flex-wrap">
        <SkeletonUI count={8} className="w-full h-full" width={150} height={100} />
      </div>
    )

  if (links === null) return null
    if (links.length === 0) {
      return (
        <div className=" w-full max-h-full h-full  gap-2 items-center justify-center flex backdrop-filter-[10px]">
          <div className="px-4 py-4 border-[1px] border-primary rounded-lg">
            No links in this folder
          </div>
        </div>
      );
  }

  return (
    <div
      className="max-w-full w-full gap-2 items-center justify-center grid grid-cols-[repeat(auto-fill,minmax(30%,1fr))] p-2 
        sm:grid-cols-[repeat(auto-fill,minmax(22.5%,1fr))]
        md:grid-cols-[repeat(auto-fill,minmax(22.5%,1fr))]
        lg:grid-cols-[repeat(auto-fill,minmax(17.5%,1fr))]
        xl:grid-cols-[repeat(auto-fill,minmax(10.5%,1fr))]
    "
    >
      {links.map((link) => {
        const { link_name, link_icon_url, link_url,link_id } = link;
        return (
          <BigButton
            key={link_id}
            name={link_name}
            icon_link={
              link_icon_url
                ? link_icon_url
                : "https://s2.svgbox.net/octicons.svg?ic=link"
            }
            onClick={() => {
              window.open(link_url, "_blank");
            }}
          />
        );
      })}
    </div>
  );
}

export default LinksContainer;
