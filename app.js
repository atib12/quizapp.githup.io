


//    QUIZ APP{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}

var question = [
    {
        question: "Html Stands For _______________________",
        options: [
            "Hyper Text Makeup Language",
            "html",
            "Case Cading Style Sh eet",
            "Hypertext markup language",
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question: "Css Stands For _______________________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language",
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question: "Js Stands For _______________________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
    },
    {
        question: "Dom Stands For _______________________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
    },
    {
        question: "Ram Stands For _______________________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
    },
    {
        question: "Rom Stands For _______________________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
    },
]

var totalQusetion = document.getElementById("totalQuestion")
var currentQusetion = document.getElementById("currentQuestion")
var displayQusetion = document.getElementById("displayQuestion")
var optionQusetion = document.getElementById("optionQuestion")
var currentindex = 0

function initRender() {

    console.log(question[currentindex].question)
    displayQusetion.innerHTML = question[0].question
    question.optionQusetion = correctAns 
    console.log("correctAns")
    alert("");
}
initRender()

displayQusetion.innerHTML = question[0].question
question.optionQusetion = correctAns
