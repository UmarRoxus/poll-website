document.getElementById("add-answer").addEventListener("click", function () {
    const answersContainer = document.getElementById("answers-container");


    const currentAnswers = answersContainer.querySelectorAll(".form-group").length;
    const nextAnswerNumber = currentAnswers + 1;

    const newAnswerDiv = document.createElement("div");
    newAnswerDiv.className = "form-group";
    newAnswerDiv.innerHTML = `
        <label for="answer-${nextAnswerNumber}">Answer ${nextAnswerNumber}:</label>
        <div class="answer-row">
            <input type="text" id="answer-${nextAnswerNumber}" name="answers[]" placeholder="Enter answer ${nextAnswerNumber}" required>
            <button type="button" class="delete-answer" aria-label="Delete this answer">🗑️</button>
        </div>
    `;

    answersContainer.appendChild(newAnswerDiv);

    newAnswerDiv.querySelector(".delete-answer").addEventListener("click", function () {
        newAnswerDiv.remove(); 
    });
});

document.querySelectorAll(".delete-answer").forEach(function (button) {
    button.addEventListener("click", function () {
        button.parentElement.parentElement.remove(); 
    });
});
