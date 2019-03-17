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
            icon: 'bars',
            component: './Doctor/doctorList',
          },
          {
            path: '/doctor/list2',
            name: 'list2',
            icon: 'bars',
            component: './Doctor/addDoctor',
          },
        ],
      },
      {
        path: '/casehistory',
        name: 'casehistory',
        icon: 'read',
        routes: [
          // 病例管理
          {
            path: '/casehistory/caselist',
            name: 'caselist',
            icon: 'bars',
            component: './CaseHistory/CaseList',
          },
          {
            path: '/casehistory/casesend',
            name: 'casesend',
            icon: 'book',
            hideInMenu: true,
            component: './CaseHistory/CaseSend',
          },
          {
            path: '/casehistory/registration',
            name: 'registration',
            icon: 'bars',
            component: './CaseHistory/Registration',
          },
        ],
      },
      {
        path: '/message',
        name: 'message',
        icon: 'team',
        routes: [
          {
            path: '/message/messagelist',
            name: 'messagelist',
            icon: 'snippets',
            component: './Message/Message',
          },
          {
            path: '/message/addmessage',
            name: 'addmessage',
            icon: 'highlight',
            component: './Message/AddMessage',
          },
        ],
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
        icon: 'solution',
        component: './UserList/UserList',
      },
      {
        component: '404',
      },
    ],
  },
];
