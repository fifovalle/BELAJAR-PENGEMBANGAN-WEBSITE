const Tombol = (P) => {
  const {
    children = "...",
    pariasi = "bg-black",
    onClick = () => {},
    type = "button",
  } = P;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${pariasi} text-white`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Tombol;
