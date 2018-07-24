const axios = require('axios');
const sites = require('./sites.json');

module.exports = function (context) {
    var promises = [];

    sites.forEach(site => {
        promises.push(new Promise((res, rej) => {
            ping(context, site).then(res);
        }));
    });

    Promise.all(promises).then(() => {
        context.done();
    });
}

async function ping(context, site) {
    var timeStamp = new Date().toISOString();
    return await axios.get(site)
        .then(resp => {
            context.log('Site: "' + site + '", Accessed: ' + timeStamp);
        })
        .catch(err => {
            context.error('Error: ' + error);
            context.error('>>> Site: "' + site + '", Accessed: ' + timeStamp);
        });
}