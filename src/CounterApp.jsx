import { useState } from "react";
export const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  const [check, setCheck] = useState(false);
  const [step, setStep] = useState(1);
 
  const handleIncrement = () => {
    const amount= step === ""? 1:Number(step);
    if(amount <= 0 || !Number.isFinite(amount)) return;
    setCount( count + amount);
  };
  const handleDecrement = (amount =  step === ""? 1: Number(step)) => {
    if(!Number.isFinite(amount) || amount <= 0) return;
    if (check === true && count -amount < 0) {
      setCount(0);
    } else{
       setCount(count - amount);
    }
  };
  const handleReset = () => {
    setCount(0);
  };
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };
  return (
    <div
      className={` min-h-screen flex flex-col items-center justify-center  p-4 md:p-6 ${theme === "dark" ? "bg-slate-900 text-white" : "bg-gray-100 text-black"}`}>
      <div className="flex items-center justify-center gap-4 ">
        <h1 className="text-xl mb-8 font-bold md:text-6xl">Counter App</h1>
        <button
          className="rounded-full px-4 py-2 bg-gray-800 text-white  
            hover:bg-gray-700 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2"
          onClick={toggleTheme}>
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
      </div>

      <div
        className={`w-full max-w-sm p-6 space-y-6 rounded-xl shadow-md ${
          theme === "dark" ? "bg-slate-700" : "bg-white"
        }`}>
        <h2
          className={`text-4xl font-bold text-center  ${
            count < 0 ? "text-red-400"
            : count > 0 ? "text-green-400"
            : "text-gray-400"
          } `}>
          {count}
        </h2>
        <input
          type="number"
          value={step}
          placeholder="enter a number to add or minus"
          onChange={(e) => setStep(e.target.value)}
          min={1}
          className="w-full rounded-xl border p-2"
        />
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => handleDecrement()}
            className=" bg-red-400 rounded-full w-12 h-12 hover:bg-red-600 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2">
            -
          </button>

          <button
            onClick={handleReset}
            className=" bg-gray-400 rounded-full w-24 h-12 hover:bg-gray-600
          hover:text-white transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2">
            Reset
          </button>
          <button
            onClick={handleIncrement}
            className="bg-green-400  rounded-full w-12 h-12 hover:bg-green-600 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2">
            +
          </button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => handleDecrement(5)}
            className="rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600 transition-colors">
            -5
          </button>

          <button
            onClick={() => setCount(count + 5)}
            className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition-colors">
            +5
          </button>
        </div>
        <div className=" flex items-center gap-3 pt-4 border-t border-gray-200">
          <input
            id="checkbox"
            type="checkbox"
            checked={check}
            onChange={(e) => setCheck(e.target.checked)}
            className="w-5 h-5 accent-blue-600 cursor-pointer"
          />
          <label
            htmlFor="checkbox"
            className="text-sm font-medium text-gray-700 cursor-pointer">
            Prevent negative value
          </label>
        </div>
      </div>
    </div>
  );
};
