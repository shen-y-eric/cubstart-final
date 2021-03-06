
// Questions will be asked
/*
const p2 = window.open('answers.html');

console.log(p2);

p2.addEventListener('DOMContentLoaded', () => {
    // Now we can access the #test element on the other page
    //const testDiv = page.document.getElementById('test')
    //testDiv.textContent = 'Hello world!'
    const c = p2.document.body.style.backgroundColor;
    console.log(c);
  })

console.log(p2); */
/*console.log(p2.style.backgroundColor);*/

var binNumber = 0;

const Questions = [{
    id: 0,
    q: "what activity sounds most appealing to you right now?",
    a: [{ text: "sitting on the couch eating ice cream", image: "", isCorrect: false },
        { text: "going to a club aye", image: "", isCorrect: false },
        { text: "taking a long drive", image: "", isCorrect: true },
        { text: "studying :')", image: "", isCorrect: true },
        { text: "eating", image: "", isCorrect: true },
        { text: "karaoke!", image: "", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What drink would you want right now? ",
    a: [{ text: "Hot drink (cocoa, tea) ", image: "", isCorrect: false, isSelected: false },
        { text: "Shots shots shots ", image: "", isCorrect: false },
        { text: "Chill drink (beer, cider)", image: "", isCorrect: false },
        { text: "Boba !", image: "", isCorrect: true },
        { text: "Coffee", image: ""},
        { text: "Energy drink", image: ""}
    ]

},
{
    id: 2,
    q: "Location check?",
    a: [{ text: "Doe Library", image: "", isCorrect: false },
        { text: "Strada", image: "", isCorrect: false },
        { text: "Kips (ew)", image: "", isCorrect: true },
        { text: "Jaguar", image: "", isCorrect: false },
        { text: "Carol's House :)", image: ""},
        { text: "Glade", image: ""}
    ]

},
{
    id: 3,
    q: "How many people do you wanna be around?",
    a: [{ text: "No one (free spirit)", image: "", isCorrect: false },
        { text: "Hundreds if not thousands", image: "", isCorrect: false },
        { text: "Just some amigos", image: "", isCorrect: true },
        { text: "Just my phone", image: "", isCorrect: true },
        { text: "With my bestie", image: "", isCorrect: true },
        { text: "What are people", image: "", isCorrect: false }
    ]

}
]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');
const op5 = document.getElementById('op5');
const op6 = document.getElementById('op6');

//const p2 = document.getElementById('page2');


// Providing option text 
op1.innerHTML = Questions[id].a[0].text + '<img src="'+Questions[id].a[0].image+'">';
op2.innerHTML = Questions[id].a[1].text + '<img src="'+Questions[id].a[1].image+'">';
op3.innerHTML = Questions[id].a[2].text + '<img src="'+Questions[id].a[2].image+'">';
op4.innerHTML = Questions[id].a[3].text + '<img src="'+Questions[id].a[3].image+'">';
op5.innerHTML = Questions[id].a[4].text + '<img src="'+Questions[id].a[4].image+'">';
op6.innerHTML = Questions[id].a[5].text + '<img src="'+Questions[id].a[5].image+'">';

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";


// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    op5.style.backgroundColor = "lightskyblue";
    op6.style.backgroundColor = "lightskyblue";
    selected = op1.value;
    if (Questions[id].id == 0) {
        if (selected) {
            binNumber = 0;
           

        }
    }
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    op5.style.backgroundColor = "lightskyblue";
    op6.style.backgroundColor = "lightskyblue";
    selected = op2.value;
    if (Questions[id].id == 0) {
        if (selected) {
            binNumber = 100;
        }
    }
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    op5.style.backgroundColor = "lightskyblue";
    op6.style.backgroundColor = "lightskyblue";
    selected = op3.value;
    if (Questions[id].id == 0) {
        if (selected) {
            binNumber = 60;
        }
    }
   
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    op5.style.backgroundColor = "lightskyblue";
    op6.style.backgroundColor = "lightskyblue";
    selected = op4.value;
    if (Questions[id].id == 0) {
        if (selected) {
            binNumber = 20;
        }
    }
   
})

// Show selection for op5
op5.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    op5.style.backgroundColor = "lightgoldenrodyellow";
    op6.style.backgroundColor = "lightskyblue";
    selected = op5.value;
    if (Questions[id].id == 0) {
        if (selected) {
            binNumber = 40;
        }
    }
   
})

// Show selection for op6
op6.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    op5.style.backgroundColor = "lightskyblue";
    op6.style.backgroundColor = "lightgoldenrodyellow";
    selected = op6.value;
    if (Questions[id].id == 0) {
        if (selected) {
            binNumber = 80;
        }
    }
  
})
console.log(binNumber);
}

if (start) {
iterate("0");
console.log(binNumber);
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 4) {
    id++;
    iterate(id);
    console.log(id);
    
}
op1.style.backgroundColor = null;
op2.style.backgroundColor = null;
op3.style.backgroundColor = null;
op4.style.backgroundColor = null;
op5.style.backgroundColor = null;
op6.style.backgroundColor = null;
if (id == 4) {
    window.location.href = "answers.html";
    }
}
);

// Back button
const back = document.getElementsByClassName('back')[0];
back.addEventListener("click", () => {
    start = false;
    id--;
    iterate(id);
    console.log(id);
});


//const num = binNumber;

//export default num;



//export const num = binNumber;

/*export {binNumber as num};*/
