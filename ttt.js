let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector(".resetbtn");
let nwgmbtn = document.querySelector(".nwgmbtn");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg");

var turn0 = true;
count =0;
let winptn = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let dsblbtn = () =>{//d
    for(box of boxes){
        box.disabled = true
    }
 }
 let enblbtn = () =>{//d
    for(box of boxes){
        box.disabled = false
        box.innerText = "";
    }
 }

const resetgame=()=>{//d
    turn0 = true;
    msgcontainer.classList.add("hide");
    enblbtn();
}

const newgame=()=>{
    for(box of boxes){
        enblbtn();
    }
}
const gamedraw = () =>{//d
    for(box of boxes){
        msg.innerText = "Match Draw";
    msgcontainer.classList.remove("hide");
    dsblbtn();
    }
}

boxes.forEach((box)=>{//d
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0 === true){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        let iswinner = checkwinner();
        if( count === 9 && !iswinner){
            gamedraw();
        }
    })
})

  let showwinner = (winner) =>{//d
    msg.innerText = `Congrstulation! Winner is ${winner}`
    msgcontainer.classList.remove("hide");
    dsblbtn();
 }

const checkwinner = ()=>{//d
    for(pattern of winptn){
        let pos1= boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 != "" && pos3 != "" ){
            if(pos1 === pos2 && pos2 === pos3){
                console.log(`!Winner is ${pos1}!`);
                showwinner(pos1);
            }
        }
    }
}


rstbtn.addEventListener("click",resetgame)
nwgmbtn.addEventListener("click",resetgame)