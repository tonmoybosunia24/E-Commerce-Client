import { useState } from "react";

const MultiValueInput = ({ label = "Values", placeholder = "Enter value", value = [], onChange }) => {

       const [input, setInput] = useState("");
       const handleKeyDown = (e) => {
              if ((e.key === "Enter" || e.key === ",") && input.trim() !== "") {
                     e.preventDefault();
                     const newItem = input.trim();
                     if (!value.includes(newItem)) {
                            onChange([...value, newItem]);
                     }
                     setInput("");
              }
              else if (e.key === "Backspace" && input === "") {
                     onChange(value.slice(0, -1));
              }
       };
       const removeItem = (itemToRemove) => {
              onChange(value.filter((item) => item !== itemToRemove));
       };

       return (
              <div className="form-control space-y-1.5">
                     {/* -------- Label & Current Items -------- */}
                     <div className="flex justify-between items-center">
                            <span className="label-text text-sm font-medium text-gray-500">{label}</span>
                            <div className="flex flex-wrap gap-1 justify-end max-w-[70%]">
                                   {value.map((item, index) => (
                                          <span key={index} onClick={() => removeItem(item)} className="bg-aliceBlue hover:bg-Radical hover:text-white font-semibold cursor-pointer text-xs px-2 py-0.5 rounded transition-all" title="Click to remove">{item}</span>
                                   ))}
                            </div>
                     </div>

                     {/* -------- Input Field -------- */}
                     <input type="text" className="w-full input input-bordered focus:outline-0" value={input} onChange={(e) => {
                            const val = e.target.value; const capitalized = val.charAt(0).toUpperCase() + val.slice(1); setInput(capitalized);
                     }} onKeyDown={handleKeyDown} placeholder={placeholder} />
              </div>
       );
};

export default MultiValueInput;