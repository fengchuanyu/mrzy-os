export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/doctor/list1' },
      {
        path: '/doctor',
        name: 'doctor',
        icon: 'team',
        routes: [
          // 医生管理
          {
            path: '/doctor/list1',
            name: 'list1',
            component: './Doctor/Doctor',
          },
          {
            path: '/doctor/list2',
            name: 'list2',
            component: './Doctor/Doctor',
          },
        ],
      },
      {
        path: '/casehistory',
        name: 'casehistory',
        icon: 'team',
      },
      {
        path: '/message',
        name: 'message',
        icon: 'team',
      },
      {
        path: '/feature',
        name: 'feature',
        icon: 'team',
      },
      {
        path: '/userlist',
        name: 'userlist',
        icon: 'solution',
        component:'./UserList/UserList',
      },
      {
        component: '404',
      },
    ],
  },
];
