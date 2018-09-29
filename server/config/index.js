// Hold methods for fetching cfg values

    const configValues = require('./config.json');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://'+ configValues.uname + ':' + configValues.pword + '@ds117423.mlab.com:17423/secondproject';

    }
};