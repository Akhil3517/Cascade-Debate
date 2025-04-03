// import React from 'react'
// import Agents from './components/Agengts'
// import Chat from './components/Chat'
// import ChatApp from './components/ChatApp'
// import Login from './components/Login'
// import Starting from './components/Starting'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//           <Route path="/" element={<Starting />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/Agents" element={<Agents />} />
//           <Route path="/Chat" element={<Chat />} />
//           <Route path="/ChatApp" element={<ChatApp />} />
//       </Routes>
//     </Router>
    
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Agents from './components/Agengts';  // Fixed spelling
import Chat from './components/Chat';
import ChatApp from './components/ChatApp';
import Login from './components/Login';
import Starting from './components/Starting';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Starting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat-app" element={<ChatApp />} />
      </Routes>
    </Router>
  );
}

export default App;
