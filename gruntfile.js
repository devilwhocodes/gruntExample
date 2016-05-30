module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            contents: ['dist/*'],
        },
        uglify: {
            my_target: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                files: {
                    'dist/js/main.js': ['src/js/*.js']
                }
            }
        },
        less: {
            my_target: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                files: {
                    'dist/css/styles.css': 'src/css/custom.less'
                }
            }
        },
        cssmin: {
            my_target: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                files: {
                    'dist/css/styles.min.css': 'dist/css/styles.css'
                }
            }
        },
        watch: {
            scripts: {
                files: 'src/js/*.js',
                tasks: ['uglify'],
                options: {
                    debounceDelay: 250,
                },
            },
            css: {
                files: 'src/css/*.less',
                tasks: ['less'],
                options: {
                    livereload: true,
                },
            },
        },

    });

    /*
        delete all files from dist folder
        uglify the JS
        convert the .less files to .css files
        minify the .css files
        watch files for changes
    */

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['clean', 'uglify', 'less', 'cssmin', 'watch']);
    grunt.registerTask('prod', ['clean', 'uglify', 'less', 'cssmin'])
};
