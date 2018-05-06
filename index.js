const request = require('request');
const dotenv = require('dotenv');
dotenv.config();

const setting = {
  'token': process.env.ACCESS_TOKEN,
  'userId': process.env.USER_ID,
  'category': process.env.CATEGORY,
}

const params = {
  'auth': {
    'bearer': setting.token,
  },
  'qs': {
    'streamId': 'user/' + setting.userId + '/category/' + setting.category,
  },
};

request('http://cloud.feedly.com/v3/streams/contents', params,
function (err, response, body) {
  if (!err && response.statusCode == 200) {
  var info = JSON.parse(body);
  console.log(info.stargazers_count + " Stars");
  console.log(info.forks_count + " Forks");
}
});
