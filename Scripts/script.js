let canv1 = document.getElementById("canv1");
let ctx = canv1.getContext("2d");

let grad1 = ctx.createLinearGradient(250,20,250,300);
grad1.addColorStop(0,"blue");
grad1.addColorStop(0.4,"white");
grad1.addColorStop(0.45,"green");
grad1.addColorStop(0.8,"white");

ctx.fillStyle = grad1
ctx.fillRect(20,20, 270, 300);

ctx.beginPath();
ctx.moveTo(100,200);
ctx.lineTo(100,100);
ctx.lineTo(200,100);
ctx.lineTo(200,200);
ctx.lineWidth = 3;
ctx.stroke();
ctx.fill();















//#endregion

//#region Worker

    //1)Create Worker
    // let myWorker = new Worker("../Scripts/worker.js");

    // function AddNums(){
    //     let n1 = +document.getElementById("num1").value;
    //     let n2 = +document.getElementById("num2").value;
    //     //2)send Message to worker (n1,n2)
    //     myWorker.postMessage([n1,n2]);
    //     //3)listen Event --> res
    //     myWorker.onmessage = function(response){
    //         // console.log(response.data);
    //         let res = response.data;
    //         document.getElementById("r1").innerHTML += res;
    //     }
    // }

//#endregion

