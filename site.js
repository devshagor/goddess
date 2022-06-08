let questions = [
  {
    id: 1,
    question: "Did you get an excessive amount of criticism from either parent growing up?",
    answer: "trust",
    options: ["Yes    ", "No"],
  },
  {
    id: 2,
    question:
      "Are you very critical of others, and sometimes feel no one is good enough?",
    answer: "2",
    options: ["Yes    ", "No"],
  },
  {
    id: 3,
    question: "Do you have “perfectionist” tendencies?",
    answer: "2",
    options: ["Yes    ", "No"],
  },
  {
    id: 4,
    question: "Do you fear people around you that you love will leave you?",
    answer: "2",
    options: ["Yes   ", "No"],
  },
  {
    id: 5,
    question: "Do you often attract emotionally unavailable people?",
    answer: "2",
    options: ["Yes   ", "No"],
  },
  {
    id: 6,
    question:
      "Do you hate being alone?",
    answer: "2",
    options: ["Yes   ", "No"],
  },
  {
    id: 7,
    question: "Do you struggle with setting boundaries?",
    answer: "2",
    options: ["Yes  ", "No"],
  },
  {
    id: 8,
    question: "Do you struggle with asking for what you want?",
    answer: "2",
    options: ["Yes  ", "No"],
  },
  {
    id: 9,
    question:
      "Are you self-sacrificing and often times put others needs ahead of your own?",
    answer: "2",
    options: ["Yes  ", "No"],
  },
  {
    id: 10,
    question: "Do you often times attract people who don’t appreciate you? ",
    answer: "2",
    options: ["Yes ", "No"],
  },
  {
    id: 11,
    question:
      "Do you struggle with being vulnerable? ",
    answer: "2",
    options: ["Yes ", "No"],
  },
  {
    id: 12,
    question:
      "Do you have a hard time expressing your emotions? ",
    answer: "2",
    options: ["Yes ", "No"],
  },
  {
    id: 13,
    question:
      "Do you struggle with low self-esteem and feel others are somehow better than you? ",
    answer: "2",
    options: ["Yes ", "No"],
  },
  {
    id: 14,
    question:
      "Do you avoid intimate relationships, for fear of being hurt? ",
    answer: "2",
    options: ["Yes", "No"],
  },
  {
    id: 15,
    question:
      "Do you struggle with trusting people? ",
    answer: "2",
    options: ["Yes", "No"],
  },
  {
    id: 16,
    question:
      "Do you often times feel insecure and need a lot of external validation? ",
    answer: "2",
    options: ["Yes", "No"],
  },
  {
    id: 17,
    question:
      "Do you feel like you don’t trust yourself to make the right decision? ",
    answer: "2",
    options: ["Yes", "No"],
  },
];

let question_count = 0;
//let points = 0;
Max_Questions = 17;

let trustPoints = 0;
let neglectPoints = 0;
let guiltPoints = 0;
let abandonmentPoints = 0;
let unworthyPoints = 0;

window.onload = function () {
  show(question_count);
};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "mailchimpform.html";
  }

  let user_answer = document.querySelector(".option.active").innerHTML;

  //check answer
  /*if (user_answer == questions[question_count].answer) {
   points += 10;
   
  }
  console.log(points);*/
  //trust(0)
  if (user_answer === "Yes") {
    trustPoints += 1;
  }
  //neglect(1)
  else if (user_answer === "Yes ") {
    neglectPoints += 1;
  }
  //guilt(2)
  else if (user_answer === "Yes  ") {
    guiltPoints += 1;
  }
  //abandonmentPoints(3)
  else if (user_answer === "Yes   ") {
    abandonmentPoints += 1;
  }
  //unworthyPoints(4)
  else if (user_answer === "Yes    "){
    unworthyPoints += 1;
  }

  sessionStorage.setItem("trust", trustPoints);
  sessionStorage.setItem("neglect", neglectPoints);
  sessionStorage.setItem("guilt", guiltPoints);
  sessionStorage.setItem("abandonment", abandonmentPoints);
  sessionStorage.setItem("unworthy" , unworthyPoints);
  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");
 

  progressBarFull.style.width = ` ${((question_count / Max_Questions) * 100 + 6 )}%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = ` ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let [first, second] = questions[count].options;
  ///////no of questions

  question.innerHTML = `
  <p class="iamquestion"> ${questions[count].question}</p>
   <ul class="option_group">
  <li><span class="option">${first}</span></li>
  <li ><span class="option">${second}</span></li>
 
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
