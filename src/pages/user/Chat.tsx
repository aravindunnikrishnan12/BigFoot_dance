// import React, { useState } from 'react';

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const handleSend = () => {
//     if (input.trim()) {
//       setMessages([...messages, { sender: 'user', text: input }]);
//       setInput('');

//       // Simulate a bot response (optional)
//       setTimeout(() => {
//         setMessages((prev) => [...prev, { sender: 'bot', text: 'Thank you for reaching out!' }]);
//       }, 1000);
//     }
//   };

//   return (
//     <div className="fixed bottom-8 right-8 bg-white shadow-lg rounded-lg w-80">
//       <div className="p-4 bg-orange-500 text-white font-bold rounded-t-lg">Chat with Us</div>
//       <div className="p-4 h-64 overflow-y-auto">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
//           >
//             <span
//               className={`inline-block p-2 rounded-lg ${
//                 msg.sender === 'user' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'
//               }`}
//             >
//               {msg.text}
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className="p-4 flex items-center">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="flex-grow border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
//           placeholder="Type a message..."
//         />
//         <button
//           onClick={handleSend}
//           className="ml-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Chat;
