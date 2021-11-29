import { useEffect, useCallback } from "react";
import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "src/slices/user";
import routes from "./routes";
const App = () => {
  const routing = useRoutes(routes);
  const dispatch = useDispatch();

  // Check if user is already logged in
  const authenticateUser = useCallback(() => {
    const user = JSON.parse(localStorage.getItem("chat_app"));
    const name = user?.name;
    dispatch(createUser(name));
  }, [dispatch]);

  useEffect(() => {
    authenticateUser();
  }, [authenticateUser]);
  return <div>{routing}</div>;
};

export default App;
