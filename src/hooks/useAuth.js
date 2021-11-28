import { useSelector } from "react-redux";

// @ts-ignore
export const useAuth = () => useSelector((state) => state.user);
