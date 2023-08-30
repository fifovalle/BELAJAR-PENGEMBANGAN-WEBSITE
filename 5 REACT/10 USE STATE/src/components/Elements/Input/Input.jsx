const Input = (P) => {
  const { type, placeholder, nama } = P;
  return (
    <input
      type={type}
      className="text-sm border rounded w-full px-3 py-2 text-slate-700 placeholder: opacity-50"
      placeholder={placeholder}
      nama={nama}
      id={nama}
    />
  );
};

export default Input;
