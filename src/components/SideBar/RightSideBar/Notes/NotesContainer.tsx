import { useQuery } from "@tanstack/react-query";
import { CiSearch } from "react-icons/ci";

import useNoteStore from "../../../../store/useNoteStore";
import AddNoteBtn from "./AddNoteBtn";
import NoteBox from "./NotesBox";
import {
  getFilteredNotes,
  getNoteByUserId,
} from "../../../../util/noteFunctions";
import { useEffect, useState } from "react";
import Input from "../../../UI/Input";
import SkeletonUI from "../../../UI/SkeletonUI";

function NotesContainer() {
  const [search, setSearch] = useState("");

  const { isLoading, isError, data } = useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      try {
        const data = await getNoteByUserId("33ddf372-5f0d-48ec-a810-696213b6282f");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return data.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  const notes = useNoteStore((state) => state.notes);
  const loadLinks = useNoteStore((state) => state.loadNotes);

  useEffect(() => {
    if (data) {
      loadLinks(data);
    }
  }, [data, loadLinks]);

  return (
    <div className="flex flex-col gap-2 px-1 w-full h-full">
      <p className="text-[1.25rem]">Notes</p>
      <div className="flex items-center gap-2 bg-secondary rounded-md px-2 py-1 w-full">
        <CiSearch className="text-[1.25rem] text-text" />
        <Input
          placeholder="Search..."
          type="text"
          className="bg-transparent text-text px-0 py-1 text-[1rem] flex-grow"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="rounded-lg grid grid-cols-2 gap-4 overflow-y-auto p-1">
        {isLoading ? (
          <SkeletonUI count={4} width={160} height={125} />
        ) : isError ? (
          <>Error while Loading</>
        ) : (
          getFilteredNotes(notes, search).map((item) => {
            return <NoteBox note={item} key={item.note_id} />;
          })
        )}
      </div>
      <AddNoteBtn />
    </div>
  );
}

export default NotesContainer;
