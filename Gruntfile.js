module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                manage: false
            },
            my_target: {
                files: {
                    'build/main.min.js': ['build/script.js']
                }
            }
        },
        
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

}