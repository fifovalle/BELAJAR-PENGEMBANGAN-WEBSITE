import { useRouteError } from "react-router-dom";

const HalamanEror = () => {
  const eror = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Waduh!</h1>
      <p className="my-5 text-xl">Teret Teret Teret Teret Teret</p>
      <p className="text-lg">{eror.statusText || eror.message}</p>
    </div>
  );
};

export default HalamanEror;
