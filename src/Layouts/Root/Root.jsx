import { Outlet } from "react-router";

const Root = () => {
       return (
              <div className="bg-greenish font-primary min-h-screen">
                     <Outlet></Outlet>
              </div>
       );
};

export default Root;