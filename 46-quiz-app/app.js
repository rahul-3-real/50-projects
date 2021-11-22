const quizApp = () => {
  // Variables
  const quizData = [
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
    },
  ];

  const card = document.querySelector(".card");
  const answers = document.querySelectorAll(".answer");
  const question = document.querySelector(".question");
  const ans_a_label = document.querySelector("#ans_a_label");
  const ans_b_label = document.querySelector("#ans_b_label");
  const ans_c_label = document.querySelector("#ans_c_label");
  const ans_d_label = document.querySelector("#ans_d_label");
  const btn = document.querySelector(".button");

  let currentQuiz = 0;
  let score = 0;

  // Functions
  const deselectAns = () => {
    answers.forEach((ans) => (ans.checked = false));
  };

  const getSelectedAns = () => {
    let answer;
    answers.forEach((ans) => {
      if (ans.checked) {
        answer = ans.id;
      }
    });

    return answer;
  };

  const loadQuiz = () => {
    deselectAns();
    const currentQuizData = quizData[currentQuiz];

    question.innerText = currentQuizData.question;
    ans_a_label.innerText = currentQuizData.a;
    ans_b_label.innerText = currentQuizData.b;
    ans_c_label.innerText = currentQuizData.c;
    ans_d_label.innerText = currentQuizData.d;
  };

  // Events
  loadQuiz();

  btn.addEventListener("click", () => {
    const answer = getSelectedAns();

    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }

      currentQuiz++;

      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        console.log(score);
        card.innerHTML = `
            <div class="card-body">
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button class="btn" onclick="location.reload()">Reload</button>
            </div>
          `;
      }
    }
  });
};

quizApp();
