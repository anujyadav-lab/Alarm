// Factory function
// function createCircle(radius,diameter){
//     return{
//         radius,
//         diameter,
//         draw(){
//             console.log('draw');

//         }
//     }
// }

// const myCircle = createCircle(1,2);
// console.log(myCircle);


// construtor function

function Audio(audiourl){
    this.audiourl = audiourl;

}

const audio = new Audio(`https://www.google.com/`);
// console.log(audio)

audio.play()
// three things happen using new keyword.
// new operator creates empty javascript objects like  const Circle = {
// }.
//2ndly new keyword let this.radius,this.draw, to point to the created empty object.
//3rdly it will return the object from Circle() function.
