const request = require('request');
const dotenv = require('dotenv');
const Feedly = require('./lib/feedly');
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

Feedly.fetchCategory(request, params).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
