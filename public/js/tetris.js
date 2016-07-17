/**
 * Created by Programmierung on 17.07.2016.
 */

var spielfeld= {array: Array()};
var row = Array();
var i;
for(i=0;i<10;i++){
    row.push('clear');
}
for(i=0;i<25;i++){
    spielfeld.array.push(row);
}
console.log(spielfeld);

var tetrimino = new Tetrimino();
tetrimino.bewegen('down', spielfeld);
tetrimino.bewegen('left', spielfeld);
tetrimino.bewegen('right', spielfeld);
console.log(spielfeld);