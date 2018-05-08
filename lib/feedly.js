const Feedly = {
/**
 * @promise Fetch Feedly Data from Category
 * @param   {Object} request Function for fetch data from API
 * @param   {Object} params Object which contains token and setting
 *
 * @returns {Promise} A promise that returns category info if resolved.
 *
 */

  fetchCategory(request, params){
    return new Promise((resolve, reject) => {
      request('http://cloud.feedly.com/v3/streams/contents', params,
      function (err, response, body) {
        if(err){
          console.log(err);
          return;
        }
        switch(response.statusCode){
          case 200:
          const info = JSON.parse(body);
          resolve(info);
          break;

          default:
          const error = {
            'status': response.statusCode,
            'content': body
          };

          reject(error);
        }
      });
    });
  },
};


module.exports = Feedly;
