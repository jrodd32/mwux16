/*global module:false*/
module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        shell: {
            theme_npm_install: {
                command: 'npm install',
                options: {
                    execOptions: {
                        cwd: '<%= pkg.themesPath %>/<%= pkg.domain %>/'
                    }
                }
            }
        },

        hub: {
            // Build for stage/prod
            build: {
                src: ['<%= pkg.themesPath %>/*/Gruntfile.js']
            }
        }
    });

    // Load plugins. Run npm install to install these according to package.json
    grunt.loadNpmTasks('grunt-hub');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('setup', ['shell:theme_npm_install','hub:build']);
};