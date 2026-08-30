// Quiz widget: attach to a .quiz-q block with data-answer="N" (0-based correct index)
// Buttons are the answer options; feedback div explains after choice.
function initQuiz(container) {
  const correct = parseInt(container.dataset.answer, 10);
  const buttons = container.querySelectorAll('button');
  const fb = container.querySelector('.feedback');
  let answered = false;
  buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      if (answered) return;
      answered = true;
      if (i === correct) {
        btn.classList.add('correct');
        fb.classList.add('show', 'good');
        fb.textContent = '✓ ' + fb.dataset.good;
      } else {
        btn.classList.add('wrong');
        buttons[correct].classList.add('correct');
        fb.classList.add('show', 'bad');
        fb.textContent = '✗ ' + fb.dataset.bad;
      }
    });
  });
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz-q').forEach(initQuiz);
});
