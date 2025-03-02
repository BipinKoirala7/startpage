import { useUser } from "../hooks/useUser";

import { redirect } from "react-router-dom";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = useUser();
  if (!user) {
      return redirect("/signIn");
  }
  return children;
};
