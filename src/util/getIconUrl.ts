import { apiResponseT, iconUrlT } from "../types";

type getUrlPropsT = {
  url: string;
};

async function getUrl({ url }: getUrlPropsT) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/iconUrl?url=${url}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result: apiResponseT<iconUrlT> = await response.json();
  if (result.error) throw new Error(result.message);
  return result;
}

export { getUrl };
