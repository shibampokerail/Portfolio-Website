const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
first_run = true;
let is_key = false;

var command_actions = {
    "help":{mode:"help", response:"resume/about - opens resume <br> projects - opens github <br> linkedin - opens linkedin <br> about - about me <br> contact - reach out to me"},
    "about":{mode:"about", response:"Hi, my name is Shibam Pokhrel! When it comes to programming, I don't mess around and I love to work hard. My diverse skillset includes Python, Flask, Django, Flutter, PostgreSQL, C++, Java, JavaScript, HTML5, Tailwind CSS, Git, and React. So, if you need a coding wizard to work on your project, you know who to call!"},
    "calc":{mode:"link", link:"https://www.shibampokhrel.com/calculator/", response:"opening calculator..." },
    "calculator":{mode:"link", link:"https://www.shibampokhrel.com/calculator/", response:`opening calculator...`},
    "projects":{mode:"link", link:"/projects.html", response:"Launching projects..."},
    "github":{mode:"link", link:"https://github.com/shibampokerail", response:"opening github..."},  
    "linkedin":{mode:"link", link:"https://www.linkedin.com/in/shibam-pokhrel-a46943215/", response:"opening linkedin..."},
    "contact":{mode:"about", response:"Let's connect, work together, have a few laughs, and create some amazing projects! You can always email me at <u>pokhrelshibam@gmail.com</u> or leave a message on my linkedin or github."},
    "resume":{mode:"link", link:"https://drive.google.com/file/d/1koqkzvfv77e2R2QT7EG6IIk9tJ5Mw_Xd/view", response:"opening resume..." },
}
// console.log(command_actions.resume.type);
document.querySelector("h1").onmouseover = event => {
    if (first_run)
    {
        first_run = false;
        let iterations =0;
        setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => { 
            if (index<iterations){
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random()*26)]}).join("");

        if (iterations >= event.target.dataset.length){
            clearInterval(interval);
        }
        iterations +=1/2;
        },45); 
    }
}

// document.querySelectorAll("a").forEach((link) => {
//     link.onmouseover = (event) => {
        
//         let iterations = 0;
//         const interval = setInterval(() => {
//             link.innerText = link.innerText.split("").map((letter, index) => { 
//                 if (index < iterations) {
//                     return link.dataset.value[index];
//                 }
//                 return letters[Math.floor(Math.random()*26)];
//             }).join("");

//             if (iterations >= link.dataset.length) {
//                 clearInterval(interval);
//             }
//             iterations += 1/2;
//         }, 45); 
//     }
// });

function adjustSize(input) {
    input.size = input.value.length;
}

const heading = document.getElementById("my-heading");
// const input = document.getElementById("my-input");
let input_key = document.getElementById("input-command");
let response = document.getElementById("response");
let keyboard = document.getElementById("pop-keyboard");
const enterKeyEvent = new KeyboardEvent("keydown", { key: "Enter" });


keyboard.focus();
heading.addEventListener("click", function() {
    // input.style.display = "inline";
    // input.focus();
    
  });

document.addEventListener("keydown", event => {
    
    // console.log(event.key);
    if (event.key.length==1 & input_key.innerText.length<44 ){
        input_key.innerText+=event.key;
    }
    if (event.key=="Backspace"){
        let command = input_key.innerText.split("");
        command.pop();
        input_key.innerText = command.join("");
    }
    if (event.key=="Enter"){
        is_key = true;
        if (command_actions[input_key.innerText]==undefined){
            console.log("invalid command");
            response.innerText = `${input_key.innerText} :command not found`;
        } else{

            response.innerHTML = executeCommand(input_key.innerText, command_actions); 
        }      
    }

  });

function executeCommand(command, actions){
    // console.log(actions[command].mode);
    
    if (actions[command].mode=="link"){
         console.log(actions[command].link);
         window.open(actions[command].link, '_blank');
    }
    return actions[command].response;
  }

const navList = document.getElementById('nav-list');
navList.addEventListener('mousedown', (event) => {

   
    const dataValue = event.target.getAttribute('data-value');
    input_key.innerText = dataValue;
    response.innerHTML = executeCommand(input_key.innerText, command_actions);
   
});

