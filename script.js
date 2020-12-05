var questions = ['He believed that space was an absolute grid on which we could identify the location and movement of objects based on their coordinates', 'He developed the theory that space and time didn\'t exist individually but were one entity known as spacetime', 'He proposed that science is done within paradigms and when enough anomalies accumulate that challenge the paradigm, a revolution occurs and a new paradigm is adopted', 'He suggested that there is no external world, but rather we each create the external world under our chosen paradigms', 'His formulas explain how the world interacts, but not why things occur', 'He believed that one ought to be able to get empirical evidence of whether one was moving', 'He suggested that the speed of light is the same for everyone; it\'s our perspective of time that varies', 'He stated that gravity is a force that depends on mass', 'He argued that people\'s lives move along worldlines in spacetime and we can\'t determine the future but rather just come to know it when it becomes the present', 'He proposed that we can never really know if a paradigm shift leads to progress since we don\'t have a standard measure of progress'];
var answers = ['Newton', 'Einstein', 'Kuhn', 'Kuhn', 'Newton', 'Leibniz', 'Einstein', 'Newton', 'Einstein', 'Kuhn'];
var curIdx = 0;
var score = 0;

function handle_answer(name) {
    if(curIdx < answers.length) {  // not finished with questions yet
        var correctAnswer = answers[curIdx];
        var correctBanner = document.getElementById('correct-banner');
        if(name === correctAnswer) {
            correctBanner.innerHTML = 'Correct';
            correctBanner.style.color = 'green';
            score++;
        }
        else {
            correctBanner.innerHTML = 'Incorrect';
            correctBanner.style.color = 'red';
        }
        curIdx++;
        var questiontext = document.getElementById('question-text');
        if(curIdx < answers.length) 
            questiontext.innerHTML = questions[curIdx];
        else
            questiontext.innerHTML = "Final Score: " + score + " / " + answers.length;
    }
}