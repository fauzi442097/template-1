import { AiOutlineDashboard } from "react-icons/ai";
import { FiCrosshair, FiSettings, FiUsers } from "react-icons/fi";

export const Menus = [
   {
      id: 1,
      title: 'Dashboard',
      url: '/',
      icon: <AiOutlineDashboard />
   },
   {
      id: 2,
      title: 'Users',
      url: '/users',
      icon: <FiUsers />
   },
   {
      id: 3,
      title: 'Component',
      url: '/',
      icon: <FiSettings />,
      subMenu: [
         {
            title: 'Alert',
            url: '/component/alert'
         },
            {
            title: 'Button',
            url: '/component/button'
         },
         {
            title: 'Role',
            url: '/component/role'
         }
      ]
   },
   {
      id: 4,
      title: 'About',
      url: '/about',
      icon: <FiCrosshair />,
   }
];
