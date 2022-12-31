import { AiOutlineDashboard } from "react-icons/ai";
import { FiCrosshair, FiSettings, FiUsers } from "react-icons/fi";

export const Menus = [
   {
      id: 1,
      title: 'Dashboard',
      url: '/',
      icon: <AiOutlineDashboard />,
      breadcrumb: 'Dashboard'
   },
   {
      id: 2,
      title: 'Users',
      url: '/users',
      icon: <FiUsers />,
      breadcrumb: 'Users'
   },
   {
      id: 3,
      title: 'Component',
      url: '/',
      icon: <FiSettings />,
      breadcrumb: 'Component',
      subMenu: [
         {
            title: 'Alert',
            url: '/component/alert',
            breadcrumb: 'Alert',
         },
            {
            title: 'Button',
            url: '/component/button',
            breadcrumb: 'Button',
         },
         {
            title: 'Font',
            url: '/component/font',
            breadcrumb: 'Font',
         }
      ]
   },
   {
      id: 4,
      title: 'About',
      url: '/about',
      icon: <FiCrosshair />,
      breadcrumb: 'About',
   }
];
