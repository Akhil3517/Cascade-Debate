



import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { messages, character } = location.state || { messages: [], character: "Unknown" };

  // Function to generate a structured summary and score
  const generateSummary = () => {
    if (messages.length < 2) {
      return {
        summary: "The debate did not progress due to minimal engagement.",
        score: 2
      };
    }

    const userStatements = messages.filter(msg => msg.sender === "user").map(msg => msg.text);
    const aiResponses = messages.filter(msg => msg.sender === "ai").map(msg => msg.text);

    // Basic scoring based on engagement and argument depth
    let score = Math.min(10, userStatements.length + aiResponses.length);

    return {
      summary: `
        **Overview:**  
        The debate between the user and ${character} consisted of multiple exchanges. The user presented ${userStatements.length} argument(s), and ${character} responded accordingly.  
        
        **Key Points:**  
        - **User's Arguments:** ${userStatements.length > 0 ? userStatements.join("; ") : "No clear arguments presented."}  
        - **${character}'s Responses:** ${aiResponses.length > 0 ? aiResponses.join("; ") : "Minimal response from AI."}  
        
        **Conclusion:**  
        The debate showed ${userStatements.length > 0 ? "some" : "little"} engagement. ${character} attempted to maintain a structured discussion, but ${userStatements.length === 0 ? "the user did not engage in a meaningful argument." : "the depth of the discussion could be improved."}
      `,
      score: score
    };
  };

  const { summary, score } = generateSummary();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Debate Summary</h2>
        <p className="text-lg mb-4 whitespace-pre-line">{summary}</p>
        <h3 className="text-2xl font-semibold text-center">Score: {score}/10</h3>
        <div className="flex justify-between mt-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            onClick={() => navigate("/agents")}
          >
            Start New Debate
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;


