import Join from "../views/Join/Join";
import Chat from "../views/Chat/Chat";

const routes = [
  {
    path: "/",
    element: <Join />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
];
export default routes;
