  const questions = [
      { question: "What does HTML stand for?", answers: ["Hyper Text Markup Language", "HighText Machine Language", "Hyper Tool Multi Language", "None"], correct: 0 },
      { question: "Which tag is used for JavaScript?", answers: ["<java>", "<script>", "<js>", "<code>"], correct: 1 },
      { question: "CSS stands for?", answers: ["Cascading Style Sheets", "Colorful Style System", "Computer Style Sheets", "None"], correct: 0 },
      { question: "Inside which HTML element do we put the CSS?", answers: ["<css>", "<script>", "<style>", "<design>"], correct: 2 },
      { question: "Which symbol is used for comments in JS?", answers: ["//", "/* */", "<!-- -->", "#"], correct: 0 },
      { question: "Which method adds an element at the end of array?", answers: ["push()", "pop()", "shift()", "unshift()"], correct: 0 },
      { question: "DOM stands for?", answers: ["Document Object Model", "Data Object Method", "Desktop Object Model", "None"], correct: 0 },
      { question: "Which function prints output to console?", answers: ["console.log()", "alert()", "document.write()", "print()"], correct: 0 },
      { question: "How to declare variable in JS?", answers: ["var", "let", "const", "All of the above"], correct: 3 },
      { question: "Which event runs code when button is clicked?", answers: ["onmouseover", "onclick", "onload", "onfocus"], correct: 1 }
    ];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    const message = document.getElementById("message");

    let currentQuestionIndex = 0;
    let score = 0;

    function showQuestion() {
      resetState();
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
      currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(index));
        answerButtons.appendChild(button);
      });
    }

    function resetState() {
      message.textContent = "";
      nextButton.style.display = "none";
      while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
      }
    }

    function selectAnswer(selectedIndex) {
      const correctIndex = questions[currentQuestionIndex].correct;
      const buttons = answerButtons.children;
      if (selectedIndex === correctIndex) {
        buttons[selectedIndex].classList.add("correct");
        message.textContent = "✅ Correct!";
        score++;
      } else {
        buttons[selectedIndex].classList.add("wrong");
        buttons[correctIndex].classList.add("correct");
        message.textContent = "❌ Wrong!";
      }
      for (let btn of buttons) btn.disabled = true;
      nextButton.style.display = "block";
    }

    nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    });

    function showScore() {
      resetState();
      questionElement.textContent = "🎉 Quiz Completed!";
      message.innerHTML = `You scored <strong>${score} / ${questions.length}</strong> 🏆`;
      nextButton.textContent = "Play Again";
      nextButton.style.display = "block";
      nextButton.addEventListener("click", () => location.reload());
    }

    showQuestion();
    
