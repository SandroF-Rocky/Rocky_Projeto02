module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'public/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/',
                    ext: 'min.css'
                }]
            }
        },

        



        
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', 'concat min cssmin');
}