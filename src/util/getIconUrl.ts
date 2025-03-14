import { apiResponseT, iconUrlT } from "../types";

type getUrlPropsT = {
  url: string;
};

async function getUrl({ url }: getUrlPropsT) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/iconUrl/${url}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result: apiResponseT<iconUrlT> = await response.json();
  return result;
}

export { getUrl };
