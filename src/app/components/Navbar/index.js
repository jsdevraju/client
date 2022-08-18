import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link } from "react-router-dom";
import { MENU } from "../../data";

const Navbar = () => {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <header className="shadow-md p-4 bg-gray-900 text-white">
      <div className="container">
        <nav>
          <h1 className="flex items-center gap-4">
            <FaBars
              onClick={() => setMenuShow(!menuShow)}
              className="cursor-pointer"
              size={25}
            />
            HR Administration System
          </h1>
        </nav>

        <Drawer
          open={menuShow}
          onClose={() => setMenuShow(!menuShow)}
          direction="left"
          size={314}
          className="!bg-gray-900"
        >
          <div className="px-3 flex flex-col h-full mt-10">
            <ul>
              {MENU.map((item, index) => (
                <li key={index} className="mt-4 text-center">
                  <Link className="font-sm font-semibold" to={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default Navbar;
