/*jslint node: true*/
/*global atom*/
'use strict';

var fs = require('fs'),
    path = require('path'),
    errorMatch = [
        '\\((?<file>.+):(?<line>\\d+):(?<col>\\d+)\\)'
    ];

exports.provideBuilder = function () {
    return {
        niceName: 'Ember',

        isEligable: function (cwd) {
            return fs.existsSync(path.join(cwd, 'ember-cli-build.js'));
        },

        settings: function () {
            return [{
                name: 'ember build',
                sh: false,
                cwd: '{PROJECT_PATH}',
                exec: 'ember',
                args: ['build'],
                errorMatch: errorMatch
            }, {
                name: 'ember build --watch',
                sh: false,
                cwd: '{PROJECT_PATH}',
                exec: 'ember',
                args: ['build', '-w'],
                errorMatch: errorMatch
            }, {
                name: 'ember build -prod',
                sh: false,
                cwd: '{PROJECT_PATH}',
                exec: 'ember',
                args: ['build', '-prod'],
                errorMatch: errorMatch
            }, {
                name: 'ember build -prod --watch',
                sh: false,
                cwd: '{PROJECT_PATH}',
                exec: 'ember',
                args: ['build', '-prod', '-w'],
                errorMatch: errorMatch
            }];
        }
    };
};
