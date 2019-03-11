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
      { path: '/', redirect: '/student/list' },
      {
        path: '/student',
        name: 'student',
        icon: 'team',
        routes: [
          // 学生管理
          {
            path: '/student/list',
            name: 'list',
            component: './Student/Student',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
