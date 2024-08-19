let arr= [
    {
        QuizNo: 1,
        Ques : "Which one is used for Fronend ?",
        Option: ["Html","Python","Php","Java"],
        // Option: ["1","2","3","4"]
        ans : "Html",
    },
    {
        QuizNo: 2,
        Ques : "Which one is used for Backend ?",
        Option: ["Js","Php","Html","Bootstrap"],
        // Option: ["5","6","7","8"],
        ans : "Php",
    },
    {
        QuizNo: 3,
        Ques : "Which one is used to style the Webpage ?",
        Option: ["Html","Express","MySql", "Css"],
        ans : "Css",
    },
    {
        QuizNo: 4,
        Ques : "Which one is alternate for Css ?",
        Option: ["Node js","MangoDb","Bootstrap", "Html"],
        ans : "Bootstrap",
    },
    {
        QuizNo: 5,
        Ques : "Which is one js based  ?",
        Option: ["Html","React js","Bootstrap", "Css"],
        ans : "React js",
    },

]


// question No
let quesCount = document.querySelector("#quesCount");

//seconds
let secs = document.querySelector("#timeOut");

//Question
let ques = document.querySelector("#Question");

//options box
let optionBox = document.querySelector(".box-2");

//containers

let prime = document.querySelector(".primary");
let second = document.querySelector(".secondary");
let ternary = document.querySelector(".ternary");

//showBtn

let showBtn = document.querySelector("#show-btn");

//options
let options = document.querySelectorAll(".options");

//next button
let nextBtn = document.querySelector("#nextBtn");
let prevBtn = document.querySelector("#prevBtn");
let subBtn = document.querySelector("#subBtn");

//Question
let question = document.querySelectorAll(".Question");
let answers = document.querySelectorAll(".answer");
let yourAns = document.querySelectorAll(".yourAnswer");
let correctedAns = document.querySelector("#scoreCount");

//init
let i=0



// function for second count

function countdownSecs(s){
    if(s>=0){
        secs.innerHTML = s;
        if(s>=1 && s<=10){
            console.log(secs.style.color="red")
        }
            setTimeout(() => {
            countdownSecs(s-1);

        }, 1000);
    }
    else{
        nextBtn.style.display = "none";
        alert("Quiz end");
    }
}

countdownSecs(60);



//  next function

function nextFunc(){
    // console.log("n"+i);
    
    if(i<arr.length){

        prevBtn.style.visibility = "visible";
        nextBtn.style.display = "block";
        subBtn.style.display = "none";
        quesCount.textContent = arr[i].QuizNo;
        ques.textContent = arr[i].Ques;
        optionItems();

    }
    if(i==0){
        prevBtn.style.visibility = "hidden";
        // nextBtn.style.marginLeft = "550px"
    }
    if(i==arr.length-1){
        subBtn.style.display = "block";
        nextBtn.style.display = "none";
        // alert("out of bound")
    }
    i++;
}


function prevClick(){
    console.log("prev"+ i-1);
    i=i-2;
    nextClick()
}
// function for next btn


function nextClick(){
    nextFunc();
    userAns();
    // countdown(30);
}


// function for retrieve the options from the array

function optionItems(){
    let items = arr[i].Option;
    for (let l = 0; l < options.length; l++) {
        options[l].textContent = items[l];
    }
}




// ----------------     function to store user answers


let arr2=[]
function userAns(event){
    
    options.forEach(element => {
        console.log(element.style.backgroundColor="white")  
    });
    console.log(event.target.style.backgroundColor = "rgb(21, 177, 21)");
      
    arr2[i-1] = event.target.textContent;

}


//  function for submit the test



subBtn.addEventListener("click",()=>{

    prime.style.display = "none"; 
    second.style.display = "flex";
    let count = 0;
    for (let a = 0; a < arr.length; a++) {
        if(arr[a].ans == arr2[a]){
            count++;
        }
    }
    correctedAns.textContent = count;
})




// --------------    function to show the results


showBtn.addEventListener("click",()=>{
    second.style.display = "none";
    ternary.style.display = "flex";
    for (let g = 0; g < question.length; g++) {
        question[g].textContent = arr[g].Ques;
        answers[g].textContent = arr[g].ans;
        yourAns[g].textContent = arr2[g];
    }
})


// ------------------   function for restart

function restartFunc(){
    i=0;
    console.log(i);
    ternary.style.display = "none";
    prime.style.display="block";
    second.style.display = "none";
    nextClick();
}


//default

nextFunc();
