import { Outlet } from "react-router";

const Root = () => {
       return (
              <div className="font-Roboto">
                     <Outlet></Outlet>
              </div>
       );
};

export default Root;