/**
 * Created by nmartinez on 11/11/2015.
 */

// Get the dependencies
var gulp            = require('gulp'),
    childProcess    = require('child_process'),
    electron        = require('electron-prebuilt');

// Create the gulp task
gulp.task('run', function(){
    childProcess.spawn(electron, ['./app'], { stdio: 'inherit' });
});