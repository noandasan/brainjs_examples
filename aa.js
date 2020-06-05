const brain = require('brain.js');

const network = new brain.NeuralNetwork();

// network.train([
//     { input: [0, 0, 0], output: [0] },
//     { input: [0, 0, 1], output: [0] },
//     { input: [0, 1, 1], output: [0] },
//     { input: [1, 0, 1], output: [1] },
//     { input: [1, 1, 1], output: [1] }
// ]);

network.train([
    { input: ["information technology"], output: ["information"] }, // Team 2 wins
    { input: ["programming java"], output: ["programmer"] }, // Team 3 wins
    { input: ["technology"], output: ["information"] }, // Team 2 wins
    { input: ["information"], output: ["information"] }, // Team 4 wins
]);

const output = network.run(["technology"]);

console.log(`Prob: ${output}`);