import { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import StudioPic1 from '../../assets/im3.jpeg';
import { User, Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactUs = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome to BigFoot Dance Arena! How can we help you today?",
      sender: 'admin',
      senderName: 'Admin',
      timestamp: new Date(),
      avatar: '/api/placeholder/32/32'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  // Specify the type for the event parameter
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        senderName: 'You',
        timestamp: new Date(),
        avatar: '/api/placeholder/32/32'
      }]);
      setNewMessage('');
    }
  };

  // Specify the type for the date parameter
  const formatTime = (date: Date | string): string => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="bg-[#f2a229] min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4 lg:p-8">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">Group Chat</h1>
          <p className="text-lg text-gray-700 mt-2">
            Join the conversation with our dance community
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chat Interface - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-xl">
              {/* Chat Header */}
              <div className="p-4 border-b bg-gray-50 rounded-t-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500 p-2 rounded-full">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold">BigFoot Dance Community</h2>
                    <p className="text-sm text-gray-500">Dance instructors and staff online</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex flex-col h-[500px]">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.sender !== 'user' && (
                        <img
                          src={message.avatar}
                          alt={message.senderName}
                          className="w-8 h-8 rounded-full"
                        />
                      )}
                      <div className={`max-w-[70%]`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm text-gray-600 font-medium">
                            {message.senderName}
                          </span>
                          <span className="text-xs text-gray-400">
                            {formatTime(message.timestamp)}
                          </span>
                        </div>
                        <div
                          className={`p-3 rounded-lg ${
                            message.sender === 'user' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {message.text}
                        </div>
                      </div>
                      {message.sender === 'user' && (
                        <img
                          src={message.avatar}
                          alt={message.senderName}
                          className="w-8 h-8 rounded-full"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t bg-gray-50">
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                      placeholder="Type your message..."
                    />
                    <button
                      type="submit"
                      className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition duration-200"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details - Takes up 1 column */}
          <div className="bg-white rounded-xl shadow-xl p-6">
            <div className="space-y-6">
              <div>
                <img
                  src={StudioPic1}
                  alt="Contact Us"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Contact Details</h2>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                    <p className="text-gray-700">
                      DDS Paradise building, Kuravankonam Junction
                      Near Cafe Mojo, Thiruvananthapuram
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <p className="text-gray-700">bigfootdancearena@gmail.com</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <p className="text-gray-700">7012591748</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="font-semibold mb-2">Follow Us</p>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
