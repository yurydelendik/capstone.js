'use strict';

module.exports = function (grunt) {

    // Load tasks from grunt-* dependencies in package.json
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take
    require('time-grunt')(grunt);

    // Project configuration
    grunt.initConfig({
        uglify: {
            dist: {
                files: {
                    'dist/capstone.min.js': [
                        'dist/capstone.js'
                    ]
                }
            }
        },
        connect: {
            options: {
                port: 9001,
                livereload: 35729,
                hostname: 'localhost',
                base: 'dist'
            },
            livereload: {
                options: {
                    open: true
                }
            }
        },
        watch: {
            scripts: {
                files: 'src/**/*.ts',
                tasks: ['typescript']
            },
            livereload: {
                files: [
                    'dist/**/*.html',
                    'dist/*.js',
                    'dist/*.css'
                ],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
        }
    });

    // Project tasks
    grunt.registerTask('test', [

    ]);
    grunt.registerTask('build', [
        'uglify'
    ]);
    grunt.registerTask('default', [
        'test',
        'build'
    ]);
};
