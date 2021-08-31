export default [
  {
    name: 'food',
    icon: 'CoffeeOutlined',
    path: '/food',
    component: './Food',
  },
  {
    name: 'material',
    icon: 'HddOutlined',
    path: '/material',
    component: './Material',
  },
  {
    name: 'takeout',
    icon: 'SendOutlined',
    path: '/takeout',
    component: './Takeout',
  },
  {
    path: '/login',
    layout: false,
    component: './Login',
    routes: [
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect:'/food'
  },
  {
    component: './404',
  },
];
