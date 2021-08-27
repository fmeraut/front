import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Personal',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/user',
    title: 'Utilisateurs',
    icon: 'mdi mdi-human',
    class: '',
    extralink: false,
    submenu: []
  },
<<<<<<< HEAD
  {
    path: '/component/admin',
    title: 'Gestion utilisateurs',
    icon: 'mdi mdi-human',
    class: '',
    extralink: false,
    submenu: []
  },
  {
=======
  /*{
>>>>>>> f33a1bb2743b3bc2a88354e05fdbe81ba8102961
    path: '',
    title: 'UI Components',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },*/
  {
    path: '/component/guide',
    title: 'Guide',
    icon: 'mdi mdi-book-open',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/experience',
    title: 'Experience',
    icon: 'mdi mdi-forum',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/place',
    title: 'Place',
    icon: 'mdi mdi-library',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/accordion',
    title: 'Accordion',
    icon: 'mdi mdi-equal',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/alert',
    title: 'Alert',
    icon: 'mdi mdi-message-bulleted',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/carousel',
    title: 'Carousel',
    icon: 'mdi mdi-view-carousel',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/dropdown',
    title: 'Dropdown',
    icon: 'mdi mdi-arrange-bring-to-front',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/modal',
    title: 'Modal',
    icon: 'mdi mdi-tablet',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/pagination',
    title: 'Pagination',
    icon: 'mdi mdi-backburger',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/poptool',
    title: 'Popover & Tooltip',
    icon: 'mdi mdi-image-filter-vintage',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/progressbar',
    title: 'Progressbar',
    icon: 'mdi mdi-poll',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/rating',
    title: 'Ratings',
    icon: 'mdi mdi-bandcamp',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/tabs',
    title: 'Tabs',
    icon: 'mdi mdi-sort-variant',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/timepicker',
    title: 'Timepicker',
    icon: 'mdi mdi-calendar-clock',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/buttons',
    title: 'Button',
    icon: 'mdi mdi-blur-radial',
    class: '',
    extralink: false,
    submenu: []
  }
  /*{
    path: '/component/card',
    title: 'Card',
    icon: 'mdi mdi-arrange-bring-forward',
    class: '',
    extralink: false,
    submenu: []
  },*/
 
];
