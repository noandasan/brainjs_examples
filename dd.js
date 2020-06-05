const brain = require('brain.js');

const trainingData = [
    'a b c',
    'x y z'

];

const lstm = new brain.recurrent.LSTM();
const result = lstm.train(trainingData, {
    iterations: 1500,
    log: details => console.log(details),
    errorThresh: 0.011
});

const run1 = lstm.run('a');


console.log(run1);