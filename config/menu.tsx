import { AiOutlineDashboard } from "react-icons/ai";
import { FiCrosshair, FiSettings, FiUsers, FiFileText } from "react-icons/fi";

export const Menus = [
   {
      id: 1,
      title: 'Dashboard',
      url: '/',
      icon: <AiOutlineDashboard />,
   },
   {
      id: 2,
      title: 'Users',
      url: '/users',
      icon: <FiUsers />,
   },
   {
      id: 3,
      title: 'Component',
      url: '/',
      icon: <FiSettings />,
      subMenu: [
         {
            title: 'Alert',
            url: '/component/alert',
         },
         {
            title: 'Badge',
            url: '/component/badge',
         },
         {
            title: 'Button',
            url: '/component/button',
         },
         {
            title: 'Card',
            url: '/component/card',
         },
         {
            title: 'Font',
            url: '/component/font',
         },
         {
            title: 'Modal',
            url: '/component/modal',
         },
         {
            title: 'Toast',
            url: '/component/toast',
         },
      ]
   },
   {
      id: 4,
      title: 'Form',
      url: '/',
      icon: <FiFileText />,
      subMenu: [
         {
            title: 'Checkbox & Radio',
            url: '/form/checkbox',
         },
         {
            title: 'Input',
            url: '/form/input',
         },
         {
            title: 'Input Group',
            url: '/form/input-group',
         },
         {
            title: 'Textarea',
            url: '/form/textarea',
         },
      ]
   }
];
