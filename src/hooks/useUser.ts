import { useEffect, useState } from "react";
import { userT } from "../types";

import { useToken } from "./useToken";

export const useUser = (): userT | null => {
    const {token} = useToken();

  const getUserFromPayload = (token:string):userT => {
    const payload = token.split(".")[1];
    const decodedPayload = atob(payload);
    return JSON.parse(decodedPayload);
  };

  const [user, setUser] = useState<userT | null>(() => {
    if (!token) return null;
    return getUserFromPayload(token);
  });
  useEffect(() => {
    if (!token) {
      setUser(null);
    } else {
      setUser(getUserFromPayload(token));
    }
  }, [token]);
  return user;
};
