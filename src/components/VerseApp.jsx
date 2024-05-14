import { useState, useEffect } from "react";
import axios from "axios";

const VerseApp = () => {
  const [userInput, setUserInput] = useState("");
  const [verse, setVerse] = useState(null);
  const [previousVerses, setPreviousVerses] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("previousVerses")) {
      setPreviousVerses(JSON.parse(localStorage.getItem("previousVerses")));
    }
  }, []);

  const fetchVerse = async () => {
    try {
      const finalUrl = `https://bible-api.com/${userInput}?translation=rccv`;
      const response = await axios.get(finalUrl);
      setVerse(response.data);
      setPreviousVerses([response.data, ...previousVerses.slice(0, 4)]);
      localStorage.setItem("previousVerses", JSON.stringify(previousVerses));
    } catch (error) {
      console.log("Error fetching verse: ", error);
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("previousVerses");
    setPreviousVerses([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-8">
      <div className="flex flex-col space-y-5">
        <input
          type="text"
          placeholder="Book and chapter"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="px-5 py-2 border border-green-500 rounded"
        />
        <button
          onClick={fetchVerse}
          className="px-5 py-2 bg-green-500 text-white rounded "
        >
          Incarca Versetul
        </button>
      </div>
      <div className="max-w-lg p-6 bg-white border border-green-500 rounded-lg shadow-lg mt-8">
        <h5 className="mb-2 text-2xl font-bold text-gray-900">
          Versetul activ
        </h5>
        {verse ? (
          <>
            <p className="font-normal text-gray-700">{verse.reference}</p>
            <p className="font-normal text-gray-700">{verse.text}</p>
          </>
        ) : (
          <p className="font-normal text-center text-gray-700">
            Introdu o referinta
          </p>
        )}
      </div>
      <div className="max-w-lg p-6 bg-white border border-green-500 rounded-lg shadow-lg mt-8">
        <div className="flex justify-between items-center mb-2">
          <h5 className="text-2xl font-bold text-gray-900">
            Istoric Versete (ultimele 5)
          </h5>
          <button onClick={clearLocalStorage}>
            <i className="bi bi-trash-fill text-2xl text-green-500"></i>
          </button>
        </div>
        <ul className="space-y-5">
          {previousVerses.map((previousVerse, index) => (
            <li key={index} className="font-normal text-gray-700">
              <hr className="mb-3 border-green-500 border" />
              <span>
                {previousVerse.reference} <br />
                {previousVerse.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VerseApp;
