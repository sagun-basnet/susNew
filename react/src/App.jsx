import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import UserLayout from "./Layout/UserLayout";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  // const AdminLayout = () => {
  //   return (
  //     <>
  //       <Topbar />
  //       <div className="flex">
  //         <Sidebar />
  //         <Outlet />
  //       </div>
  //     </>
  //   );
  // };

  const route = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/service",
          element: <ServicePage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    // {
    //   path: "/dashboard",
    //   element: <AdminLayout/>,
    //   children: [
    //     {
    //       path: "/dashboard",
    //       element: <DashboardHome/>

    //     },
    //     {
    //       path: "/dashboard/user-management",
    //       element: <UserManagement/>
    //     }
    //   ]

    // }
  ]);

  return (
    <>
      <RouterProvider router={route} />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/single/:id" element={<SinglePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
  );
};

export default App;
