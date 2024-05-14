import { useState } from "react";

const EmailSenderApp = () => {
  const [emails, setEmails] = useState([]);
  const [newEmail, setNewEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);

  const addEmail = () => {
    setEmails([...emails, newEmail]);
    setNewEmail("");
  };

  const sendMessage = () => {
    const messages = emails.map((email) => ({ email, message }));
    setSentMessages([...sentMessages, ...messages]);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-around items-center">
      <div>
        <h1 className="text-3xl font-bold mb-6">Email Sender</h1>
        <div className="max-w-md flex flex-col gap-5 bg-white p-6 rounded-lg shadow-md">
          <div>
            <input
              type="email"
              placeholder="Enter email address"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="w-full border-gray-300 rounded-md py-2 px-4 mb-4"
            />
            <button
              onClick={addEmail}
              className="px-4 py-2 bg-blue-500 text-white rounded-md "
            >
              Add Email
            </button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border-gray-300 rounded-md py-2 px-4 mb-4"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Sent Messages</h2>
        {sentMessages.map(({ email, message }, index) => (
          <div key={index} className="mb-2">
            <p className="text-gray-600">To: {email}</p>
            <p className="italic">{message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailSenderApp;
