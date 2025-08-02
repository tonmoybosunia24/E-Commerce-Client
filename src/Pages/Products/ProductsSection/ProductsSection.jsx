import { useContext, useEffect, useState } from "react";
import useProducts from "../../../Hooks/useProducts";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import { CiCircleList, CiGrid41 } from "react-icons/ci";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../../../Providers/AuthProviders";
import PriceRangeSlider from "../../../Components/PriceRangeSlider/PriceRangeSlider";
import { useNavigate } from "react-router";


const ProductsSection = ({ categoryFromLink }) => {

       const [page, setPage] = useState(1);
       const [rowButton, setRowButton] = useState(true);
       const [colButton, setColButton] = useState(false);
       const [sortBy, setSortBy] = useState('name-asc');
       const [filter, setFilter] = useState({ availability: [], size: [], color: [], brands: [], price: [0, 300000], category: categoryFromLink ? [categoryFromLink] : [] });
       const { searchInput } = useContext(AuthContext);
       const { allProducts, totalPages, currentPage, limit: productsPerPage, allProductsLoading, counts } = useProducts(page, sortBy, filter, searchInput);
       const start = (currentPage - 1) * productsPerPage + 1;
       const end = Math.min(currentPage * productsPerPage, totalPages * productsPerPage);
       const navigate = useNavigate()
       /* ----------------Handle Checkbox Functionality--------------- */
       const handleCheckboxChange = (type, value, checked) => {
              setFilter((prev) => {
                     const updatedValues = checked
                            ? [...prev[type], value]
                            : prev[type].filter((item) => item !== value);
                     return { ...prev, [type]: updatedValues };
              });
       };
       /* --------------------Dynamically Update The Category------------------ */
       useEffect(() => {
              setPage(1);
              setFilter(prev => ({
                     ...prev,
                     category: categoryFromLink ? [categoryFromLink] : []
              }));
       }, [categoryFromLink]);

       return (
              <section className="px-5 md:px-10 lg:px-20 my-5 md:my-7 lg:my-10">
                     <div className="flex gap-5">
                            {/* --------------------Filter Section------------------- */}
                            <div className="flex-3/12 hidden h-fit lg:block border border-gray-400 rounded-sm">
                                   <h2 className="font-bold px-5 py-2 text-lg border-b border-b-gray-400">Filter By</h2>
                                   {/* ----------------------Clear Filter Section--------------------- */}
                                   <div className="px-5 pt-3">
                                          {(filter.availability.length > 0 || filter.size.length > 0 || filter.color.length > 0 || filter.brands.length > 0 || filter?.category?.length > 0) && (<div onClick={() => { navigate('/products'); setFilter({ availability: [], size: [], color: [], brands: [], category: [], price: [0, 300000], }) }} className="flex items-center gap-1 w-fit px-2 py-1.5 rounded-sm border cursor-pointer"><RxCross2 /> <span className="text-sm font-semibold">Clear All</span></div>)}
                                   </div>
                                   {/* -----------------Filter Section Container For Pc--------------- */}
                                   <div>
                                          {/* ------------------Availability Section------------------ */}
                                          <div className="px-5 py-2 space-y-1.5">
                                                 <h3 className="font-semibold text-lg">Availability</h3>
                                                 <div className="flex gap-2">
                                                        <input type="checkbox" id="in-stock" value="In Stock" checked={filter.availability?.includes("In Stock")} onChange={(e) => handleCheckboxChange("availability", e.target.value, e.target.checked)} />
                                                        <label htmlFor="in-stock" className="w-full flex justify-between cursor-pointer">
                                                               <p className="font-medium">In Stock</p>
                                                               <p className="text-sm">{counts.availability?.['In Stock'] || 0}</p>
                                                        </label>
                                                 </div>
                                                 <div className="flex gap-2">
                                                        <input type="checkbox" id="available" value="Limited Stock" checked={filter.availability?.includes("Limited Stock")} onChange={(e) => handleCheckboxChange("availability", e.target.value, e.target.checked)} />
                                                        <label htmlFor="available" className="w-full flex justify-between cursor-pointer">
                                                               <p className="font-medium">Limited Stock</p>
                                                               <p className="text-sm">{counts.availability?.['Limited Stock'] || 0}</p>
                                                        </label>
                                                 </div>
                                                 <div className="flex gap-2">
                                                        <input type="checkbox" id="not-available" value="Not Available" checked={filter.availability?.includes("Not Available")} onChange={(e) => handleCheckboxChange("availability", e.target.value, e.target.checked)} />
                                                        <label htmlFor="not-available" className="w-full flex justify-between cursor-pointer">
                                                               <p className="font-medium">Not Available</p>
                                                               <p className="text-sm">{counts.availability?.['Not Available'] || 0}</p>
                                                        </label>
                                                 </div>
                                          </div>
                                          {/* -----------------------Size Section--------------------- */}
                                          <div className="px-5 pb-2 space-y-1.5">
                                                 <h3 className="font-semibold text-lg">Size</h3>
                                                 <div className="flex gap-2">
                                                        <input type="checkbox" id="size-small" value="S" checked={filter.size?.includes("S")} onChange={(e) => handleCheckboxChange("size", e.target.value, e.target.checked)} />
                                                        <label htmlFor="size-small" className="w-full flex justify-between cursor-pointer">
                                                               <p className="font-medium">Small</p>
                                                               <p className="text-sm">{counts.size?.S || 0}</p>
                                                        </label>
                                                 </div>
                                                 <div className="flex gap-2">
                                                        <input type="checkbox" id="size-medium" value="M" checked={filter.size?.includes("M")} onChange={(e) => handleCheckboxChange("size", e.target.value, e.target.checked)} />
                                                        <label htmlFor="size-medium" className="w-full flex justify-between cursor-pointer">
                                                               <p className="font-medium">Medium</p>
                                                               <p className="text-sm">{counts.size?.M || 0}</p>
                                                        </label>
                                                 </div>
                                                 <div className="flex gap-2">
                                                        <input type="checkbox" id="size-large" value="L" checked={filter.size?.includes("L")} onChange={(e) => handleCheckboxChange("size", e.target.value, e.target.checked)} />
                                                        <label htmlFor="size-large" className="w-full flex justify-between cursor-pointer">
                                                               <p className="font-medium">Large</p>
                                                               <p className="text-sm">{counts.size?.L || 0}</p>
                                                        </label>
                                                 </div>
                                                 <div className="flex gap-2">
                                                        <input type="checkbox" id="size-xl" value="XL" checked={filter.size?.includes("XL")} onChange={(e) => handleCheckboxChange("size", e.target.value, e.target.checked)} />
                                                        <label htmlFor="size-xl" className="w-full flex justify-between cursor-pointer">
                                                               <p className="font-medium">XL</p>
                                                               <p className="text-sm">{counts.size?.XL || 0}</p>
                                                        </label>
                                                 </div>
                                                 <div className="flex gap-2">
                                                        <input type="checkbox" id="size-xxl" value="XXL" checked={filter.size?.includes("XXL")} onChange={(e) => handleCheckboxChange("size", e.target.value, e.target.checked)} />
                                                        <label htmlFor="size-xxl" className="w-full flex justify-between cursor-pointer">
                                                               <p className="font-medium">XXL</p>
                                                               <p className="text-sm">{counts.size?.XXL || 0}</p>
                                                        </label>
                                                 </div>
                                          </div>
                                          {/* ---------------------Colors Section--------------------- */}
                                          <div className="px-5 pb-2 space-y-1.5">
                                                 <h3 className="font-semibold text-lg">Colors</h3>
                                                 <div className="flex gap-2">
                                                        <input type="checkbox" id="red" value="#FF0000" checked={filter.color?.includes("#FF0000")} onChange={(e) => handleCheckboxChange("color", e.target.value, e.target.checked)} />
                                                        <label htmlFor="red" className="w-full flex justify-between cursor-pointer">
                                                               <div className="flex items-center gap-1">
                                                                      <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: "#FF0000" }}></div>
                                                                      <p className="font-medium">Red</p>
                                                               </div>
                                                               <p className="text-sm">{counts.color?.["#FF0000"] || 0}</p>
                                                        </label>
                                                 </div>
                                                 <div className="flex gap-2">
                                                        <input type="checkbox" id="black" value="#000000" checked={filter.color?.includes("#000000")} onChange={(e) => handleCheckboxChange("color", e.target.value, e.target.checked)} />
                                                        <label htmlFor="black" className="w-full flex justify-between cursor-pointer">
                                                               <div className="flex items-center gap-1">
                                                                      <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: "#000000" }}></div>
                                                                      <p className="font-medium">BLack</p>
                                                               </div>
                                                               <p className="text-sm">{counts.color?.["#000000"] || 0}</p>
                                                        </label>
                                                 </div>
                                                 <div className="flex gap-2">
                                                        <input type="checkbox" id="white" value="#FFFFFF" checked={filter.color?.includes("#FFFFFF")} onChange={(e) => handleCheckboxChange("color", e.target.value, e.target.checked)} />
                                                        <label htmlFor="white" className="w-full flex justify-between cursor-pointer">
                                                               <div className="flex items-center gap-1">
                                                                      <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: "#FFFFFF" }}></div>
                                                                      <p className="font-medium">White</p>
                                                               </div>
                                                               <p className="text-sm">{counts.color?.["#FFFFFF"] || 0}</p>
                                                        </label>
                                                 </div>
                                                 <div className="flex gap-2">
                                                        <input type="checkbox" id="gray" value="#CCCCCC" checked={filter.color?.includes("#CCCCCC")} onChange={(e) => handleCheckboxChange("color", e.target.value, e.target.checked)} />
                                                        <label htmlFor="gray" className="w-full flex justify-between cursor-pointer">
                                                               <div className="flex items-center gap-1">
                                                                      <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: "#CCCCCC" }}></div>
                                                                      <p className="font-medium">Gray</p>
                                                               </div>
                                                               <p className="text-sm">{counts.color?.["#CCCCCC"] || 0}</p>
                                                        </label>
                                                 </div>
                                          </div>
                                          {/* --------------------Price Range Section------------------ */}
                                          <PriceRangeSlider filter={filter} setFilter={setFilter}></PriceRangeSlider>
                                          {/* ------------------------Brands Section------------------- */}
                                          <div className="px-5 pb-2 space-y-1.5">
                                                 <h3 className="font-semibold text-lg">Brands</h3>
                                                 <div className="flex gap-2">
                                                        <input type="checkbox" id="apple" value="Apple" checked={filter.brands?.includes("Apple")} onChange={(e) => handleCheckboxChange("brands", e.target.value, e.target.checked)} />
                                                        <label htmlFor="apple" className="w-full flex justify-between cursor-pointer">
                                                               <p className="font-medium">Apple</p>
                                                               <p className="text-sm">{counts.brands?.Apple || 0}</p>
                                                        </label>
                                                 </div>
                                                 <div className="flex gap-2">
                                                        <input type="checkbox" id="samsung" value="Samsung" checked={filter.brands?.includes("Samsung")} onChange={(e) => handleCheckboxChange("brands", e.target.value, e.target.checked)} />
                                                        <label htmlFor="samsung" className="w-full flex justify-between cursor-pointer">
                                                               <p className="font-medium">Samsung</p>
                                                               <p className="text-sm">{counts.brands?.Samsung || 0}</p>
                                                        </label>
                                                 </div>
                                                 <div className="flex gap-2">
                                                        <input type="checkbox" id="sony" value="Sony" checked={filter.brands?.includes("Sony")} onChange={(e) => handleCheckboxChange("brands", e.target.value, e.target.checked)} />
                                                        <label htmlFor="sony" className="w-full flex justify-between cursor-pointer">
                                                               <p className="font-medium">Sony</p>
                                                               <p className="text-sm">{counts.brands?.Sony || 0}</p>
                                                        </label>
                                                 </div>
                                                 <div className="flex gap-2">
                                                        <input type="checkbox" id="nike" value="Nike" checked={filter.brands?.includes("Nike")} onChange={(e) => handleCheckboxChange("brands", e.target.value, e.target.checked)} />
                                                        <label htmlFor="nike" className="w-full flex justify-between cursor-pointer">
                                                               <p className="font-medium">Nike</p>
                                                               <p className="text-sm">{counts.brands?.Nike || 0}</p>
                                                        </label>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                            {/* -------------------Products Section------------------ */}
                            <div className="flex-9/12">
                                   <h2 className="font-bold text-xl">New Products</h2>
                                   {/* -----------------Products Header Section--------------- */}
                                   <div className="flex justify-between items-center py-3">
                                          <div className="flex items-center flex-1 gap-3">
                                                 {/* ------------------View Toggle Buttons------------------ */}
                                                 <div className="flex text-2xl">
                                                        <CiGrid41 className={`cursor-pointer ${rowButton && 'text-Radical'}`} onClick={() => { setColButton(false); setRowButton(true) }} />
                                                        <CiCircleList className={`cursor-pointer ${colButton && 'text-Radical'}`} onClick={() => { setRowButton(false); setColButton(true) }} />
                                                 </div>
                                                 <h3 className="text-sm">There Are Total {allProducts.length} Products</h3>
                                          </div>
                                          {/* -------------------Select Option For Pc------------------ */}
                                          <div className="hidden lg:block">
                                                 <div className="flex items-center gap-2 py-1 whitespace-nowrap">
                                                        <p>Sort By: </p>
                                                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select  focus-within:outline-0">
                                                               <option disabled={true}>Date Added, Newest To Oldest</option>
                                                               <option value='name-asc'>Name, A To Z</option>
                                                               <option value='name-desc'>Name, Z To A</option>
                                                               <option value='price-desc'>Price, High To Low</option>
                                                               <option value='price-asc'>Price, Low To High</option>
                                                        </select>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* -------------------Filter Tag Section------------------- */}
                                   {(filter.availability.length > 0 || filter.size.length > 0 || filter.color.length > 0 || filter.brands.length > 0 || filter.category.length > 0) && (
                                          <div className="flex items-center gap-2 pb-2 md:pb-3 lg:pb-5">
                                                 <h4 className="text-lg font-semibold">Active Filter : </h4>
                                                 {filter.availability.map((available, index) => (<div key={index} onClick={() => setFilter(prev => ({ ...prev, availability: prev.availability.filter(item => item !== available) }))} className="flex items-center  gap-0.5 px-2 py-1 rounded-xs text-sm font-bold border cursor-pointer"><RxCross2 className="text-base" />{available}</div>))}
                                                 {filter.size.map((sizes, index) => (<div key={index} onClick={() => setFilter(prev => ({ ...prev, size: prev.size.filter(item => item !== sizes) }))} className="flex items-center gap-0.5  px-2 py-1 rounded-xs text-sm font-bold border cursor-pointer"><RxCross2 className="text-base" />({sizes})</div>))}
                                                 {filter.color.map((col, index) => (<div key={index} onClick={() => setFilter(prev => ({ ...prev, color: prev.color.filter(item => item !== col) }))} className="flex items-center gap-0.5  px-2 py-1 rounded-xs text-sm font-bold border cursor-pointer"><RxCross2 className="text-base" />({col})</div>))}
                                                 {filter.brands.map((brand, index) => (<div key={index} onClick={() => setFilter(prev => ({ ...prev, brands: prev.brands.filter(item => item !== brand) }))} className="flex items-center gap-0.5  px-2 py-1 rounded-xs text-sm font-bold border cursor-pointer"><RxCross2 className="text-base" />{brand}</div>))}
                                                 {filter.category.map((cat, index) => (<div key={index} onClick={() => { navigate('/products'); setFilter(prev => ({ ...prev, category: prev.category.filter(item => item !== cat) })) }} className="flex items-center gap-0.5  px-2 py-1 rounded-xs text-sm font-bold border cursor-pointer"><RxCross2 className="text-base" />{cat}</div>))}
                                          </div>
                                   )}
                                   {/* -----------------Select Option For Mobile---------------- */}
                                   <div className="lg:hidden pb-2">
                                          <div className="flex items-center gap-2 w-full py-1 whitespace-nowrap">
                                                 <h3 className="font-semibold text-xl hidden md:block">Sort By : </h3>
                                                 <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select w-full focus-within:outline-0">
                                                        <option disabled={true}>Date Added, Newest To Oldest</option>
                                                        <option value='name-asc'>Name, A To Z</option>
                                                        <option value='name-desc'>Name, Z To A</option>
                                                        <option value='price-desc'>Price, High To Low</option>
                                                        <option value='price-asc'>Price, Low To High</option>
                                                 </select>
                                                 {/* --------------Phone Checkbox Model Button------------- */}
                                                 <label htmlFor="my_modal_7" className="bg-Radical text-lg text-white px-4 py-1.5 rounded-md">Filter</label>
                                                 {/* ----------------Phone Checkbox Model------------------ */}
                                                 <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                                                 <div className="modal" role="dialog">
                                                        {/* ------------------Modal For Mobile Checkbox------------------ */}
                                                        <div className="modal-box">
                                                               {/* --------------------Available Section For Mobile------------------- */}
                                                               <div className=" space-y-1.5">
                                                                      <h3 className="font-semibold text-lg">Availability</h3>
                                                                      <div className="flex gap-2">
                                                                             <input type="checkbox" id="in-stock" value="In Stock" checked={filter.availability?.includes("In Stock")} onChange={(e) => handleCheckboxChange("availability", e.target.value, e.target.checked)} />
                                                                             <label htmlFor="in-stock" className="w-full flex justify-between cursor-pointer">
                                                                                    <p className="font-medium">In Stock</p>
                                                                                    <p className="text-sm">{counts.availability?.['In Stock'] || 0}</p>
                                                                             </label>
                                                                      </div>
                                                                      <div className="flex gap-2">
                                                                             <input type="checkbox" id="available" value="Limited Stock" checked={filter.availability?.includes("Limited Stock")} onChange={(e) => handleCheckboxChange("availability", e.target.value, e.target.checked)} />
                                                                             <label htmlFor="available" className="w-full flex justify-between cursor-pointer">
                                                                                    <p className="font-medium">Limited Stock</p>
                                                                                    <p className="text-sm">{counts.availability?.['Limited Stock'] || 0}</p>
                                                                             </label>
                                                                      </div>
                                                                      <div className="flex gap-2">
                                                                             <input type="checkbox" id="not-available" value="Not Available" checked={filter.availability?.includes("Not Available")} onChange={(e) => handleCheckboxChange("availability", e.target.value, e.target.checked)} />
                                                                             <label htmlFor="not-available" className="w-full flex justify-between cursor-pointer">
                                                                                    <p className="font-medium">Not Available</p>
                                                                                    <p className="text-sm">{counts.availability?.['Not Available'] || 0}</p>
                                                                             </label>
                                                                      </div>
                                                               </div>
                                                               {/* -----------------------Size Section For Mobile--------------------- */}
                                                               <div className="space-y-1.5">
                                                                      <h3 className="font-semibold text-lg">Size</h3>
                                                                      <div className="flex gap-2">
                                                                             <input type="checkbox" id="size-small" value="S" checked={filter.size?.includes("S")} onChange={(e) => handleCheckboxChange("size", e.target.value, e.target.checked)} />
                                                                             <label htmlFor="size-small" className="w-full flex justify-between cursor-pointer">
                                                                                    <p className="font-medium">Small</p>
                                                                                    <p className="text-sm">{counts.size?.S || 0}</p>
                                                                             </label>
                                                                      </div>
                                                                      <div className="flex gap-2">
                                                                             <input type="checkbox" id="size-medium" value="M" checked={filter.size?.includes("M")} onChange={(e) => handleCheckboxChange("size", e.target.value, e.target.checked)} />
                                                                             <label htmlFor="size-medium" className="w-full flex justify-between cursor-pointer">
                                                                                    <p className="font-medium">Medium</p>
                                                                                    <p className="text-sm">{counts.size?.M || 0}</p>
                                                                             </label>
                                                                      </div>
                                                                      <div className="flex gap-2">
                                                                             <input type="checkbox" id="size-large" value="L" checked={filter.size?.includes("L")} onChange={(e) => handleCheckboxChange("size", e.target.value, e.target.checked)} />
                                                                             <label htmlFor="size-large" className="w-full flex justify-between cursor-pointer">
                                                                                    <p className="font-medium">Large</p>
                                                                                    <p className="text-sm">{counts.size?.L || 0}</p>
                                                                             </label>
                                                                      </div>
                                                                      <div className="flex gap-2">
                                                                             <input type="checkbox" id="size-xl" value="XL" checked={filter.size?.includes("XL")} onChange={(e) => handleCheckboxChange("size", e.target.value, e.target.checked)} />
                                                                             <label htmlFor="size-xl" className="w-full flex justify-between cursor-pointer">
                                                                                    <p className="font-medium">XL</p>
                                                                                    <p className="text-sm">{counts.size?.XL || 0}</p>
                                                                             </label>
                                                                      </div>
                                                                      <div className="flex gap-2">
                                                                             <input type="checkbox" id="size-xxl" value="XXL" checked={filter.size?.includes("XXL")} onChange={(e) => handleCheckboxChange("size", e.target.value, e.target.checked)} />
                                                                             <label htmlFor="size-xxl" className="w-full flex justify-between cursor-pointer">
                                                                                    <p className="font-medium">XXL</p>
                                                                                    <p className="text-sm">{counts.size?.XXL || 0}</p>
                                                                             </label>
                                                                      </div>
                                                               </div>
                                                               {/* ---------------------Colors Section For Mobile--------------------- */}
                                                               <div className="space-y-1.5">
                                                                      <h3 className="font-semibold text-lg">Colors</h3>
                                                                      <div className="flex gap-2">
                                                                             <input type="checkbox" id="red" value="#FF0000" checked={filter.color?.includes("#FF0000")} onChange={(e) => handleCheckboxChange("color", e.target.value, e.target.checked)} />
                                                                             <label htmlFor="red" className="w-full flex justify-between cursor-pointer">
                                                                                    <div className="flex items-center gap-1">
                                                                                           <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: "#FF0000" }}></div>
                                                                                           <p className="font-medium">Red</p>
                                                                                    </div>
                                                                                    <p className="text-sm">{counts.color?.["#FF0000"] || 0}</p>
                                                                             </label>
                                                                      </div>
                                                                      <div className="flex gap-2">
                                                                             <input type="checkbox" id="black" value="#000000" checked={filter.color?.includes("#000000")} onChange={(e) => handleCheckboxChange("color", e.target.value, e.target.checked)} />
                                                                             <label htmlFor="black" className="w-full flex justify-between cursor-pointer">
                                                                                    <div className="flex items-center gap-1">
                                                                                           <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: "#000000" }}></div>
                                                                                           <p className="font-medium">BLack</p>
                                                                                    </div>
                                                                                    <p className="text-sm">{counts.color?.["#000000"] || 0}</p>
                                                                             </label>
                                                                      </div>
                                                                      <div className="flex gap-2">
                                                                             <input type="checkbox" id="white" value="#FFFFFF" checked={filter.color?.includes("#FFFFFF")} onChange={(e) => handleCheckboxChange("color", e.target.value, e.target.checked)} />
                                                                             <label htmlFor="white" className="w-full flex justify-between cursor-pointer">
                                                                                    <div className="flex items-center gap-1">
                                                                                           <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: "#FFFFFF" }}></div>
                                                                                           <p className="font-medium">White</p>
                                                                                    </div>
                                                                                    <p className="text-sm">{counts.color?.["#FFFFFF"] || 0}</p>
                                                                             </label>
                                                                      </div>
                                                                      <div className="flex gap-2">
                                                                             <input type="checkbox" id="gray" value="#CCCCCC" checked={filter.color?.includes("#CCCCCC")} onChange={(e) => handleCheckboxChange("color", e.target.value, e.target.checked)} />
                                                                             <label htmlFor="gray" className="w-full flex justify-between cursor-pointer">
                                                                                    <div className="flex items-center gap-1">
                                                                                           <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: "#CCCCCC" }}></div>
                                                                                           <p className="font-medium">Gray</p>
                                                                                    </div>
                                                                                    <p className="text-sm">{counts.color?.["#CCCCCC"] || 0}</p>
                                                                             </label>
                                                                      </div>
                                                               </div>
                                                               {/* --------------------Price Range Section For Mobile----------------- */}
                                                               <PriceRangeSlider filter={filter} setFilter={setFilter}></PriceRangeSlider>
                                                               {/* --------------------Brands Section For Mobile---------------------- */}
                                                               <div className="space-y-1.5">
                                                                      <h3 className="font-semibold text-lg">Brands</h3>
                                                                      <div className="flex gap-2">
                                                                             <input type="checkbox" id="apple" value="Apple" checked={filter.brands?.includes("Apple")} onChange={(e) => handleCheckboxChange("brands", e.target.value, e.target.checked)} />
                                                                             <label htmlFor="apple" className="w-full flex justify-between cursor-pointer">
                                                                                    <p className="font-medium">Apple</p>
                                                                                    <p className="text-sm">{counts.brands?.Apple || 0}</p>
                                                                             </label>
                                                                      </div>
                                                                      <div className="flex gap-2">
                                                                             <input type="checkbox" id="samsung" value="Samsung" checked={filter.brands?.includes("Samsung")} onChange={(e) => handleCheckboxChange("brands", e.target.value, e.target.checked)} />
                                                                             <label htmlFor="samsung" className="w-full flex justify-between cursor-pointer">
                                                                                    <p className="font-medium">Samsung</p>
                                                                                    <p className="text-sm">{counts.brands?.Samsung || 0}</p>
                                                                             </label>
                                                                      </div>
                                                                      <div className="flex gap-2">
                                                                             <input type="checkbox" id="sony" value="Sony" checked={filter.brands?.includes("Sony")} onChange={(e) => handleCheckboxChange("brands", e.target.value, e.target.checked)} />
                                                                             <label htmlFor="sony" className="w-full flex justify-between cursor-pointer">
                                                                                    <p className="font-medium">Sony</p>
                                                                                    <p className="text-sm">{counts.brands?.Sony || 0}</p>
                                                                             </label>
                                                                      </div>
                                                                      <div className="flex gap-2">
                                                                             <input type="checkbox" id="nike" value="Nike" checked={filter.brands?.includes("Nike")} onChange={(e) => handleCheckboxChange("brands", e.target.value, e.target.checked)} />
                                                                             <label htmlFor="nike" className="w-full flex justify-between cursor-pointer">
                                                                                    <p className="font-medium">Nike</p>
                                                                                    <p className="text-sm">{counts.brands?.Nike || 0}</p>
                                                                             </label>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* -----------Products Sent To ProductCard------------ */}
                                   {allProductsLoading ? (<div className="flex items-center justify-center min-h-[200px]"><span className="loading loading-spinner text-error text-4xl"></span></div>) : allProducts.length === 0 ? (<div className="flex items-center justify-center min-h-[200px]"><p className="text-gray-500 text-lg font-medium">No Products Found</p></div>) : (<div className={`grid ${rowButton ? 'grid-cols-2 md:grid-cols-4 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-1 lg:grid-cols-1'} ${!allProductsLoading && allProducts.length >= 5 ? 'border border-b-0 border-l-0 border-gray-400' : ''} ${allProducts.length > 1 && allProducts.length < 5 ? 'border-l border-gray-400' : ''}`}>
                                          {allProducts.map((allProduct, index) => (<div key={allProduct._id || index} className={`border-b ${index === 0 ? 'border-l border-gray-400' : 'border-l border-gray-400'} ${allProducts.length > 0 && allProducts.length < 5 ? 'border-t border-r border-b' : ''}  ${allProducts.length > 1 && allProducts.length < 5 ? 'border-l-0' : ''}`}><ProductCard fromSlider="allProducts" isColumn={colButton} product={allProduct} /></div>))}</div>)}
                                   {/* ------------------Pagination Section--------------- */}
                                   <div className="flex items-center justify-between pt-5">
                                          <p className="text-sm text-gray-600 ">Showing {start} To  {end} Of {totalPages * productsPerPage} Products</p>
                                          <div className="flex items-center gap-2">
                                                 <button disabled={currentPage === 1} onClick={() => setPage((currentPage) => currentPage - 1)} className="px-1 py-1 border border-gray-300 disabled:text-gray-400 text-lg rounded-full"><FiArrowLeft /></button>
                                                 <p className="text-xs">{currentPage} / {totalPages}</p>
                                                 <button disabled={currentPage === totalPages} onClick={() => setPage((currentPage) => currentPage + 1)} className="px-1 py-1 border border-gray-300 disabled:text-gray-400 text-lg rounded-full"><FiArrowRight /></button>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </section>
       );
};

export default ProductsSection;