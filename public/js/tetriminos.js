/**
 * Created by Programmierung on 17.07.2016.
 */
var tetriminos = {1:   {color: 'lightblue',
                        build: [[true,true,true,true]]},
                2:   {color: 'blue',
                      build: [[true,true,true],[true,false,false]]},
                3:   {color: 'orange',
                      build: [[true,true,true],[false,false,true]]},
                4:   {color: 'yellow',
                      build: [[true,true],[true,true]]},
                5:   {color: 'green',
                      build: [[true,true,false],[false,true,true]]},
                6:   {color: 'violett',
                      build: [[true,true,true],[false,true,false]]},
                7:   {color: 'red',
                      build: [[false,true,true],[true,true,false]]}
                };


var Tetrimino = function (){
    var number = Math.floor((Math.random()*7)+1);
    var color = tetriminos[number].color;
    var build = Array();
    var direction = 0;

    var i,j;
    
    for(i=0;i<tetriminos[number].build.length;i++){
        for(j=0;j<tetriminos[number].build[i].length;j++){
            if(tetriminos[number].build[i][j]==true){
                build.push({y: i, x: Math.floor((5-(tetriminos[number].build[i].length/2)+j))});
            }
        }
    }
    console.log(build);
    console.log(number);
    
    function bewegen (dir,spielfeld){
        var newBuild = build;
        if(dir=='down'){
            for(i=0;i<newBuild.length;i++){
                newBuild[i].y = newBuild[i].y+1;
                if(newBuild[i].y>25){
                    return 'bottom';
                }
            }
        }
        else if(dir=='left'){
            for(i=0;i<newBuild.length;i++){
                newBuild[i].x = newBuild[i].x - 1;
                if(newBuild[i].x<0){
                    return 'left';
                }
            }
        }
        else if(dir=='right'){
            for(i=0;i<newBuild.length;i++){
                newBuild[i].x = newBuild[i].x + 1;
                if(newBuild[i].x<0){
                    return 'right';
                }
            }
        }
        for(i=0;i<build.length;i++){
            spielfeld.array[build[i].x][build[i].y] = 'clear';
        }
        build = newBuild;
        for(i=0;i<build.length;i++){
            spielfeld.array[build[i].x][build[i].y] = color;
        }
    }
    
    return {
        bewegen: bewegen
    }
};