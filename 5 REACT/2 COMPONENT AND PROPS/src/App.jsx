import React from "react";

const Tombol = (P, teks) => {
  const { children = "...", pariasi = "bg-black" } = P;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${pariasi} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Tombol pariasi="bg-red-700">Merah</Tombol>
        <Tombol pariasi="bg-slate-700">Slate</Tombol>
        <Tombol pariasi="bg-black">Black</Tombol>
        <Tombol></Tombol>
      </div>
    </div>
  );
}

export default App;
