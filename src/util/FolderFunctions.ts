import { folderT } from "../types";

export async function getFolders() {
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/folders`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const result = await response.json();
    return result;
}

export async function getFolderById(folder_id: string) {
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/folders/${folder_id}`);
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    const result = await response.json();
    return result
}

export async function updateFolder(folder_id:string,changeProperty:string,new_value:string) {
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/folders/${folder_id}`, {
        method: 'PATCH',
        headers: {
            "Content_Type":"application/json"
        },
        body:JSON.stringify({changeProperty,new_value})
    })
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    const result = await response.json();
    return result
}

export async function deleteFolder(folder_id: string) {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/folders/${folder_id}`,
      {
        method: "DELETE"
      }
    );
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    const result = await response.json();
    return result
}

export async function createFolder(folder:folderT) {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_API_URL}/folders`,
          {
              method: "POST",
              headers: {
                  'Content-Type':'application/json'
              },
              body: JSON.stringify(folder)
          }
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result = await response.json();
        return result;
}