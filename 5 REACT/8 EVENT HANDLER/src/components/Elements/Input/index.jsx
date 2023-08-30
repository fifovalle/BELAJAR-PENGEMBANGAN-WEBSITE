import Input from "./Input";
import Label from "./Label";

const InputForm = (P) => {
  const { judul, nama, type, placeholder } = P;
  return (
    <div className="mb-6">
      <Label htmlFor={nama}>{judul}</Label>
      <Input nama={nama} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
