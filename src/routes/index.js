import Join from "src/views/Join/Join";
import Chat from "src/views/Chat/Chat";

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
