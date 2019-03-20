import { stringify } from 'qs';
import request from '@/utils/request';

const globalUrl={
  dev:'http://localhost:80/mrzyht',
  pro:'http://www.mrzymz.com/zyy'
}
const BASE_URL = globalUrl.dev;
export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params = {}) {
  return request(`/api/rule?${stringify(params.query)}`, {
    method: 'POST',
    body: {
      ...params.body,
      method: 'update',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile(id) {
  return request(`/api/profile/basic?id=${id}`);
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function removeFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices(params = {}) {
  return request(`/api/notices?${stringify(params)}`);
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}`);
}

export async function getDoctor() {
  return request(`${BASE_URL}/doctor/getdoc`);
}

export async function getRegistration() {
  return request(`${BASE_URL}/user/changereg`);
}

export async function getUserList() {
  return request(`${BASE_URL}/user/getusers`);
}

export async function addDoc(params) {
  return request(`${BASE_URL}/doctor/adddoc`, {
    method: 'POST',
    body: params,
  });
}

export async function article() {
  return request(`${BASE_URL}/User/article`);
}

export async function allcate() {
  return request(`${BASE_URL}/User/allcate`);
}

export async function allills() {
  return request(`${BASE_URL}/User/allills`);
}

export async function addills(params) {
  console.log(params);
  return request(`${BASE_URL}/user/addills`, {
    method: 'POST',
    body: params,
  });
}

export async function addoffice(params) {
  console.log(params);
  return request(`${BASE_URL}/doctor/addoffice`, {
    method: 'POST',
    body: params,
  });
}

export async function casesend(params) {
  console.log(params);
  return request(`${BASE_URL}/user/addcase`, {
    method: 'POST',
    body: params,
  });
}

export async function getOffice() {
  return request(`${BASE_URL}/doctor/getoffice`);
}

export async function getCaseList() {
  return request(`${BASE_URL}/user/getcase`);
}

export async function addMessage(params) {
  console.log(params);
  return request(`${BASE_URL}/doctor/addarticle`,{
    method: 'POST',
    body: params,
  });
}

export async function change(params) {
  console.log(params);
  return request(`${BASE_URL}/user/change`,{
    method: 'POST',
    body: params,
  });
}
