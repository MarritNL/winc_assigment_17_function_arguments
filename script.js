/* const wallPaint = function() {
    console.log ('this wall has been painted red');
};

wallPaint ();


const wallPaint3 = function (colour) {
    console.log ('This wall has been painted ' + colour);
};

wallPaint2 ('green');
wallPaint2 ('pink');

wallPaint2();
// this wall has been painted undefined
*/

/* const wallPaint3 = function (detailA, detailB) {
    console.log ('the' + detailA + 'of the wall has been painted ' + detailB);
}


let side = 'north';
let colour = 'pink';
wallPaint3 (side, colour);
// works

const wallPaint3 = function (detailB, detailA) {
    console.log ('the' + detailA + ' of the wall has been painted ' + detailB);
}
let side = 'north';
let colour = 'pink';
wallPaint3 (side, colour);
// still works
*/
const wallPaint3 = function (detailB, detailA) {
    console.log ('the ' + detailA + ' of the wall has been painted ' + detailB);
}
let side = 'north';
let colour = 'pink';
wallPaint3 (colour, side);
// still works