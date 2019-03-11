function postStudent(req, res) {
  let str = '';
  str += req.param('testaa');
  return res.json({
    timestamp: 1513932555104111,
    status: 403,
    testreq: str,
  });
}

export default {
  'POST /api/getstudent': postStudent,
};
