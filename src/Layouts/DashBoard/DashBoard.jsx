import { Outlet } from "react-router";

const DashBoard = () => {
       return (
              <div className="font-Roboto">
                     <div>
                            <Outlet></Outlet>
                     </div>
              </div>
       );
};

export default DashBoard;