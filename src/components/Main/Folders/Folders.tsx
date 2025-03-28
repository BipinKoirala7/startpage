import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

import ScrollBackBtn from "./ScrollBackBtn";
import FolderOptions from "./FolderOptions";
import ScrollForwardBtn from "./ScrollForwardBtn";
import { apiResponseT, folderT } from "../../../types";
import useFolderStore from "../../../store/folderStore";
import SkeletonUI from "../../UI/SkeletonUI";

function Folders() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const parentElementRef = useRef<HTMLDivElement>(null);
  const childrenElementRef = useRef<HTMLDivElement>(null);

  const fetchFolders = useFolderStore((state) => state.fetchFolders);
  const { isError, data, isLoading } = useQuery({
    queryKey: ["folders"],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/folders`);
      const data: apiResponseT<Array<folderT>> = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return data;
    },
  });

  useEffect(() => {
    if (data?.data) {
      fetchFolders(data.data);
    }
  }, [data, fetchFolders]);

  useEffect(() => {
    const parentOffsetWidth = parentElementRef.current?.offsetWidth;
    const childrenOffsetWidth = childrenElementRef.current?.offsetWidth;
    if (parentOffsetWidth && childrenOffsetWidth) {
      if (parentOffsetWidth > childrenOffsetWidth) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    }
  }, [data, showScrollBtn]);

  if (isError)
    return (
      <div className={`w-full h-full flex items-center justify-center gap-4 bg-surface`}>
        Error occured
      </div>
    );
  return (
    <div
      ref={parentElementRef}
      className="relative flex items-center gap-4 overflow-hidden w-full h-full"
    >
      {isLoading ? (
        <>
          <SkeletonUI count={6} width={175} height={50} />
        </>
      ) : (
        <div
          ref={childrenElementRef}
          className=" flex gap-4 overflow-x-auto max-w-full px-4 items-center justify-between w-full h-full rounded-lg bg-surface
          sm:
          md:
          lg:
          xl:
      "
        >
          {showScrollBtn && <ScrollBackBtn />}
          <FolderOptions />
          {showScrollBtn && <ScrollForwardBtn />}
        </div>
      )}
    </div>
  );
}

export default Folders;
