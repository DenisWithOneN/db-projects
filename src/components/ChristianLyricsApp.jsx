import { useState } from "react";

const lyrics = [
  "Când mă gândesc la faptul că, pe cruce, El a murit, Și în locul meu chinul L-a purtat și-a suferit, Îmi este greu să cred că Dumnezeu m-a iubit atât, Dar știu că pe Isus, pe cruce, păcatele mi le-a purtat.",
  "Tu ai fost, Isuse, tot ce mi-am dorit, Și altceva în cer și pe pământ nu-mi mai este dorit, Tu ai fost lumina ce mi-a arătat calea, În întunericul vieții mele ai fost scânteia ce nu se stinge niciodată.",
  "Fie că viața e-n zori, fie că seara e grea, La Isus să alergăm, El e poarta de lângă ea, Fie că suntem buni, fie că greșim adesea, La Isus să alergăm, El e calea și viața noastră.",
];

const ChristianLyricsApp = () => {
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);

  const shuffleLyrics = () => {
    const newIndex = Math.floor(Math.random() * lyrics.length);
    setCurrentLyricIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6">Versuri Creștine Românești</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg mb-4">{lyrics[currentLyricIndex]}</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={shuffleLyrics}
        >
          shuffle
        </button>
      </div>
    </div>
  );
};

export default ChristianLyricsApp;
