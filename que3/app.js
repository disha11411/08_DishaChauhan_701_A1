// app.js
const readline = require("readline");
const DomainChatbot = require("./domainChatbot");

const chatbot = new DomainChatbot();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the Library Assistant chatbot! (type 'exit' to quit)");

function ask() {
  rl.question("You: ", (input) => {
    if (input.trim().toLowerCase() === "exit") {
      console.log("Chatbot: Goodbye! Have a great day!");
      rl.close();
      return;
    }

    const response = chatbot.getResponse(input);
    console.log(`Chatbot: ${response}`);
    ask();
  });
}

ask();

rl.on("close", () => {
  process.exit(0);
});
