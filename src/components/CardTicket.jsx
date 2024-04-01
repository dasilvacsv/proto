import React from "react";
import { Link } from "react-router-dom";
import { RiMore2Fill, RiAddLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa"
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const CardTicket = (props) => {
  const { ticket, totalTickets, text } = props;

  let status = "";
  let textColor = "";

  switch (ticket) {
    case "total":
      status = "bg-red-500/10 text-red-500";
      textColor = "text-red-500";
      break;
    case "inProcess":
      status = "bg-blue-500/10 text-blue-500";
      textColor = "text-blue-500";
      break;
    case "close":
      status = "bg-green-500/10 text-green-500";
      textColor = "text-green-500";
      break;
      
  }

  return (
    <div className="bg-blue-50 grid-cols-3 p-6 gap-x-10 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <FaUser
            className={`text-4xl ${status} p-2 box-content rounded-xl`}
          />
        </div>
        <div>
          <Menu
            menuButton={
              <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-900 p-2 rounded-lg transition-colors">
                <RiMore2Fill />
              </MenuButton>
            }
            align="end"
            arrow
            arrowClassName="bg-secondary-100"
            transition
            menuClassName="bg-secondary-100 p-4"
          >
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="/perfil"
                className="rounded-lg transition-colors text-gray-800 hover:bg-blue-50 flex items-center gap-x-4 p-2 flex-1"
              >
                Dashboard tickets
              </Link>
            </MenuItem>
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="/perfil"
                className="rounded-lg transition-colors text-gray-800 hover:bg-blue-50 flex items-center gap-x-4 p-2 flex-1"
              >
                Información
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
      {/* Number of tickets */}
      <div>
        <h1 className="text-4xl text-gray-700 font-bold mb-4">{totalTickets}</h1>
        <p className={textColor}>{text}</p>
      </div>
      <hr className="border border-dashed border-gray-500/50 my-4" />
      <div>
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-700 hover:underline"
        >
          <RiAddLine /> Agregar nuevo ticket
        </Link>
      </div>
    </div>
  );
};

export default CardTicket;
