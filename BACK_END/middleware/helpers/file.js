//Util simple functions like folder, files, and Math functions

var walk = function(dir, callbak) {

    var fs = require('fs');
    var results = [];
    fs.readdir(dir, function(err, list) {
        if (err) return callbak(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return callbak(null, results);
            file = dir + '/' + file;
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        })();
    });
};

module.exports = {
    //Foreach in all files inside a folder running callback in all files
    eachDir: function(dir, callback) {
        walk(dir, function(err, files) {
            for (var i = files.length - 1; i >= 0; i--) {
                if (typeof callback != "undefined") {
                    callback(files[i]);
                }
            };
        })
    }
}
