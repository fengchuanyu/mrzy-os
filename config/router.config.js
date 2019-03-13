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
        //特色诊疗
        routes: [
          {
            path: '/feature/detail-page',
            name: 'detail-page',
            icon: 'ellipsis',
            component: './Feature/Feature_detail_page',
          },
          {
            path: '/feature/add-page',
            name: 'add-page',
            icon: 'file-add',
            component: './Feature/Feature_add_page',
          },
          {
            path: '/feature/office-page',
            name: 'office-page',
            icon: 'desktop',
            component: './Feature/Feature_office_page',
          },
        ],
      },
      {
        path: '/userlist',
        name: 'userlist',
        icon: 'team',
      },
      {
        component: '404',
      },
    ],
  },
];
