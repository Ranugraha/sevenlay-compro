import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/aboutUs';
import Servic from './pages/servic/Servic';
import ContactUs from './pages/contactUs/contactUs';

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about-us',
          element: <AboutUs />,
        },
        {
          path: '/services',
          element: <Servic />,
        },
        {
          path: '/contact-us',
          element: <ContactUs />,
        },
        // {
        //   path: '/category',
        //   element: <Category />,
        // },
      ],
    },
    {
      path: '/login',
      element: 'Login',
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
