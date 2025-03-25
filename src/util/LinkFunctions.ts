import { apiResponseT, linkT } from "../types";

export async function getLink(folder_id: string, link_id: string) {
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/links/${folder_id}/${link_id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const result: apiResponseT<linkT[]> = await response.json();
  if (result.error) throw new Error(result.message);
  return result;
}

export async function deleteLink(folder_id: string, link_id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/links/${folder_id}/${link_id}`,
    {
      method: `DELETE`,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result: apiResponseT<linkT[]> = await response.json();
  if (result.error) throw new Error(result.message);
  return result;
}

export async function createNewLink(link: linkT) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/links/create`,
    {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(link)
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result: apiResponseT<linkT[]> = await response.json();
  console.log(result)
  if (result.error) throw new Error(result.message);
  return result;
}

export async function updateLink(folder_id:string,link_id:string,new_value:string,changeProperty:string) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/links/${folder_id}/${link_id}`,
    {
      method: `PATCH`,
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
            new_value: new_value,
            changeProperty: changeProperty
        })
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result: apiResponseT<linkT[]> = await response.json();
  if (result.error) throw new Error(result.message);
  return result;
}

export async function getAllLinks(folder_id: string) {
  const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/links/${folder_id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result: apiResponseT<linkT[]> = await response.json();
  if(result.error) throw new Error(result.message);
  return result;
}