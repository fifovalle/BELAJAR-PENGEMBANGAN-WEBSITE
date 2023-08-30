import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((P, ref) => {
  const { judul, nama, type, placeholder } = P;
  return (
    <div className="mb-6">
      <Label htmlFor={nama}>{judul}</Label>
      <Input nama={nama} type={type} placeholder={placeholder} ref={ref} />
    </div>
  );
});

export default InputForm;
