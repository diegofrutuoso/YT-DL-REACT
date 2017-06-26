// ######  CORE Module #####################################
'use strict';

//Get required libs
var Mongoose = require('mongoose');
var Config = require('./config.json');

var Connection = Mongoose.connect(Config.dbUri, Config.dbOptions);
var Db = Mongoose.createConnection;
//var beforeQuery = require('./beforeQuery.js');

//beforeQuery.helpers = require('./datahelpers/helpers.js');

//Grouping models
var core = {
    // ///All Data modification stay on core
    // dataHelpers: beforeQuery.helpers,

    // //APP Access Control
    // ApplicationAccess: require('./models/applicationsAccessModel.js')(Connection, Db, Mongoose, beforeQuery),
    // Application: require('./models/applicationsModel.js')(Connection, Db, Mongoose, beforeQuery),

    // //Other data
    // Users: require('./models/usersModel.js')(Connection, Db, Mongoose, beforeQuery),
    // UserAccess: require('./models/usersAccessModel.js')(Connection, Db, Mongoose, beforeQuery),
    // Images: require('./models/imagesModel.js')(Connection, Db, Mongoose, beforeQuery),
    // PodcastMarkings: require('./models/podcastMarkingsModel.js')(Connection, Db, Mongoose, beforeQuery),
    // PodcastsEpisodes: require('./models/podcastsEpisodesModel.js')(Connection, Db, Mongoose, beforeQuery),
    // Podcasts: require('./models/podcastsModel.js')(Connection, Db, Mongoose, beforeQuery),
    // Stations: require('./models/stationsModel.js')(Connection, Db, Mongoose, beforeQuery),
    // Categories: require('./models/categoriesModel.js')(Connection, Db, Mongoose, beforeQuery),
    // GlobalActivity: require('./models/globalActivityModel.js')(Connection, Db, Mongoose, beforeQuery),
    // GlobalCount: require('./models/globalCountModel.js')(Connection, Db, Mongoose, beforeQuery),
    // PlayActivity: require('./models/playActivityModel.js')(Connection, Db, Mongoose, beforeQuery),
    // Advertisings: require('./models/advertisingsModel.js')(Connection, Db, Mongoose, beforeQuery),
    // Streamings: require('./models/streamingsModel.js')(Connection, Db, Mongoose, beforeQuery),
    // Payments: require('./models/paymentsModel.js')(Connection, Db, Mongoose, beforeQuery),
    // Statistics: require('./models/statisticsModel.js')(Connection, Db, Mongoose, beforeQuery),
    // Countries: require('./models/countriesModel.js')(Connection, Db, Mongoose, beforeQuery),
    // States: require('./models/statesModel.js')(Connection, Db, Mongoose, beforeQuery),
    // Cities: require('./models/citiesModel.js')(Connection, Db, Mongoose, beforeQuery),
    // Playlists: require('./models/playlistsModel.js')(Connection, Db, Mongoose, beforeQuery),
};

//Export core application
module.exports = core;

console.log('\n CloudRadio Core Loadded');
console.log('    CORE -> #DB connected ' + Config.dbUri);
