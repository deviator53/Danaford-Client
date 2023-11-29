import { ContactUs, Home, Services , SignIn, SignUp } from "@/pages";
import AboutUs from "./pages/about-us";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "services",
    path: "/services",
    element: <Services />,
  },
  {
    name: "about us",
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
];

export default routes;
