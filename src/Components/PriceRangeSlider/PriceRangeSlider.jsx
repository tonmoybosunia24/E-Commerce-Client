import { useState, useEffect } from "react";

const PriceRangeSlider = ({ filter, setFilter }) => {
       const minPrice = 0;
       const maxPrice = 300000;
       const [minVal, setMinVal] = useState(filter.price[0] || minPrice);
       const [maxVal, setMaxVal] = useState(filter.price[1] || maxPrice);
       const handleMinChange = (e) => {
              const value = Math.min(Number(e.target.value), maxVal - 100);
              setMinVal(value);
       };
       const handleMaxChange = (e) => {
              const value = Math.max(Number(e.target.value), minVal + 100);
              setMaxVal(value);
       };
       useEffect(() => {
              setFilter((prev) => ({
                     ...prev,
                     price: [minVal, maxVal],
              }));
       }, [minVal, maxVal]);

       return (
              <div className="lg:px-5 pb-2">
                     {/* -------------------Price Range Header------------------ */}
                     <div className="font-semibold text-base space-y-1.5">
                            <h3 className="font-semibold text-lg">Availability</h3>
                            <p>{minVal} Tk - {maxVal} Tk</p>
                     </div>
                     <div className="relative w-full h-8">
                            {/* ----------------Track Background---------------- */}
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 rounded-full transform -translate-y-1/2 z-10" />
                            {/* ---------------Selected Range Fill-------------- */}
                            <div className="absolute top-1/2 h-0.5 bg-black rounded-full transform -translate-y-1/2 z-20"
                                   style={{ left: `${(minVal / maxPrice) * 100}%`, width: `${((maxVal - minVal) / maxPrice) * 100}%`, }} />
                            {/* -----------------Min Range Input----------------- */}
                            <input type="range" min={minPrice} max={maxPrice} value={minVal} onChange={handleMinChange} className="absolute top-0 left-0 w-full h-8 appearance-none bg-transparent pointer-events-none z-30" style={{ WebkitAppearance: "none" }} />
                            {/* -----------------Max Range Input----------------- */}
                            <input type="range" min={minPrice} max={maxPrice} value={maxVal} onChange={handleMaxChange} className="absolute top-0 left-0 w-full h-8 appearance-none bg-transparent pointer-events-none z-30" style={{ WebkitAppearance: "none" }} />
                            <style>
                                   {` input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; height: 20px; width: 20px; border-radius: 50%; background: white; cursor: pointer; pointer-events: auto; position: relative; border: 2px solid black; box-shadow: 0 0 2px rgba(0,0,0,0.2); top: 50%; z-index: 50;} input[type=range]::-moz-range-thumb { height: 20px; width: 20px; border-radius: 50%; background: #ff5252; cursor: pointer; pointer-events: auto; position: relative; border: 2px solid white; box-shadow: 0 0 2px rgba(0,0,0,0.2); top: 50%; z-index: 50;}`}
                            </style>
                     </div>
              </div>
       );
};

export default PriceRangeSlider;
