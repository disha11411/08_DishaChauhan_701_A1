// domainChatbot.js

class DomainChatbot {
  constructor() {
    // Each key is an array of keywords/phrases
    this.knowledgeBase = [
      {
        keywords: ["hour", "hours", "time", "open", "opening"],
        response: "The library is open from 9 AM to 6 PM, Monday to Friday."
      },
      {
        keywords: ["membership", "member", "register", "registration"],
        response: "You can become a member by filling out the registration form at the front desk."
      },
      {
        keywords: ["book", "books", "collection"],
        response: "We have over 10,000 books across various genres including fiction, non-fiction, and academic texts."
      },
      {
        keywords: ["location", "located", "address", "where"],
        response: "The library is located on 123 Library Street, Downtown."
      },
      {
        keywords: ["fine", "fines", "penalty", "late fee"],
        response: "The fine is $0.25 per day for overdue books."
      },
      {
        keywords: ["event", "events", "club", "meetup"],
        response: "We host weekly book clubs and monthly author meetups."
      }
    ];

    this.defaultResponse = "Sorry, I don't understand that. Can you ask something else about the library?";
  }

  getResponse(userInput) {
    const input = userInput.toLowerCase();

    for (const entry of this.knowledgeBase) {
      for (const keyword of entry.keywords) {
        if (input.includes(keyword)) {
          return entry.response;
        }
      }
    }

    return this.defaultResponse;
  }
}

module.exports = DomainChatbot;
