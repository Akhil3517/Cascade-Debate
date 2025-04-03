



// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Summary = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { messages, character } = location.state || { messages: [], character: "Unknown" };

//   // Function to generate a structured summary and score
//   const generateSummary = () => {
//     if (messages.length < 2) {
//       return {
//         summary: "The debate did not progress due to minimal engagement.",
//         score: 2
//       };
//     }

//     const userStatements = messages.filter(msg => msg.sender === "user").map(msg => msg.text);
//     const aiResponses = messages.filter(msg => msg.sender === "ai").map(msg => msg.text);

//     // Basic scoring based on engagement and argument depth
//     let score = Math.min(10, userStatements.length + aiResponses.length);

//     return {
//       summary: `
//         **Overview:**  
//         The debate between the user and ${character} consisted of multiple exchanges. The user presented ${userStatements.length} argument(s), and ${character} responded accordingly.  
        
//         **Key Points:**  
//         - **User's Arguments:** ${userStatements.length > 0 ? userStatements.join("; ") : "No clear arguments presented."}  
//         - **${character}'s Responses:** ${aiResponses.length > 0 ? aiResponses.join("; ") : "Minimal response from AI."}  
        
//         **Conclusion:**  
//         The debate showed ${userStatements.length > 0 ? "some" : "little"} engagement. ${character} attempted to maintain a structured discussion, but ${userStatements.length === 0 ? "the user did not engage in a meaningful argument." : "the depth of the discussion could be improved."}
//       `,
//       score: score
//     };
//   };

//   const { summary, score } = generateSummary();

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
//       <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-4">Debate Summary</h2>
//         <p className="text-lg mb-4 whitespace-pre-line">{summary}</p>
//         <h3 className="text-2xl font-semibold text-center">Score: {score}/10</h3>
//         <div className="flex justify-between mt-6">
//           <button
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
//             onClick={() => navigate("/agents")}
//           >
//             Start New Debate
//           </button>
//           <button
//             className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg"
//             onClick={() => navigate("/")}
//           >
//             Home
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Summary;


// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Summary = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { messages, character } = location.state || { messages: [], character: "Unknown" };

//   // Function to generate an accurate summary and score based on user engagement
//   const generateSummary = () => {
//     const userStatements = messages.filter(msg => msg.sender === "user").map(msg => msg.text);
//     const aiResponses = messages.filter(msg => msg.sender === "ai").map(msg => msg.text);

//     // Score based on user engagement (more participation = higher score)
//     const userParticipation = userStatements.length;
//     let score = Math.min(10, userParticipation * 2); // Each message adds 2 points, max 10

//     let summary = `**Overview:**  
//     The debate between the user and ${character} had ${userStatements.length} user statement(s) and ${aiResponses.length} response(s) from ${character}.  
//     `;

//     if (userStatements.length === 0) {
//       summary += `\n**Conclusion:**  
//       The debate did not progress as the user did not present any arguments. Engaging more actively would improve the quality of the discussion.`;
//     } else {
//       summary += `
//       **Key Points:**  
//       - **User's Arguments:** ${userStatements.join("; ") || "No clear arguments presented."}  
//       - **${character}'s Responses:** ${aiResponses.join("; ") || "Minimal response from AI."}  
      
//       **Conclusion:**  
//       The user participated with ${userStatements.length} statement(s), leading to a ${score}/10 engagement score. A more detailed discussion could enhance the debate.`;
//     }

//     return { summary, score };
//   };

//   const { summary, score } = generateSummary();

//   return (
//     <div className="flex flex-col items-center justify-center h-max  bg-gray-900 text-white p-6">
//       <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-4">Debate Summary</h2>
//         <p className="text-lg mb-4 whitespace-pre-line">{summary}</p>
//         <h3 className="text-2xl font-semibold text-center">User Engagement Score: {score}/10</h3>
//         <div className="flex justify-between mt-6">
//           <button
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
//             onClick={() => navigate("/agents")}
//           >
//             Start New Debate
//           </button>
//           <button
//             className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg"
//             onClick={() => navigate("/")}
//           >
//             Home
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Summary;


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { messages, character } = location.state || { messages: [], character: "Unknown" };

  // Function to analyze logical engagement in the debate
  const generateSummary = () => {
    const userStatements = messages.filter(msg => msg.sender === "user").map(msg => msg.text);
    const aiResponses = messages.filter(msg => msg.sender === "ai").map(msg => msg.text);

    let score = 0;

    if (userStatements.length > 0) {
      userStatements.forEach((statement, index) => {
        const lowerStatement = statement.toLowerCase();

        // Logical structure: Look for words like 'because', 'therefore', 'hence'
        if (/\b(because|therefore|hence|thus|so|consequently)\b/.test(lowerStatement)) {
          score += 2;
        }

        // Directly addressing AI's argument (rebuttal)
        if (index < aiResponses.length && lowerStatement.includes("you said")) {
          score += 2;
        }

        // Questioning AI (challenging the response)
        if (/\?$/.test(statement)) {
          score += 2;
        }

        // Expressing agreement or disagreement
        if (/\b(i agree|i disagree|that's wrong|you're right)\b/.test(lowerStatement)) {
          score += 2;
        }
      });

      // Cap score at 10
      score = Math.min(10, score);
    }

    let summary = `**Overview:**  
    The debate between the user and ${character} had ${userStatements.length} user statement(s) and ${aiResponses.length} response(s) from ${character}.  
    `;

    if (userStatements.length === 0) {
      summary += `\n**Conclusion:**  
      The debate did not progress as the user did not present any arguments. Engaging more actively would improve the quality of the discussion.`;
    } else {
      summary += `
      **Key Points:**  
      - **User's Arguments:** ${userStatements.join("; ") || "No clear arguments presented."}  
      - **${character}'s Responses:** ${aiResponses.join("; ") || "Minimal response from AI."}  
      
      **Conclusion:**  
      The user participated with ${userStatements.length} statement(s), leading to a ${score}/10 engagement score. A more structured debate can further enhance the discussion.`;
    }

    return { summary, score };
  };

  const { summary, score } = generateSummary();

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white p-6">
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Debate Summary</h2>
        <p className="text-lg mb-4 whitespace-pre-line">{summary}</p>
        <h3 className="text-2xl font-semibold text-center">User Engagement Score: {score}/10</h3>
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
