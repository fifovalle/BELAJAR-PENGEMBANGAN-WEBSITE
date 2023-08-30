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

export default Tombol;
