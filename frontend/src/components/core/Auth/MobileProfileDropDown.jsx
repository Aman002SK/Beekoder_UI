import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { AiOutlineCaretDown, AiOutlineHome } from "react-icons/ai";
import { MdOutlineContactPhone } from "react-icons/md";
import { TbMessage2Plus } from "react-icons/tb";
import { PiNotebook } from "react-icons/pi";

export default function MobileProfileDropDown() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <button className="relative sm:hidden" onClick={() => setOpen(true)}>
      <div className="flex items-center gap-x-1">
        {/* Profile image */}
        <AiOutlineCaretDown className="text-sm text-richblack-100" />
      </div>

      {/* Dropdown content */}
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute min-w-[120px] top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-lg border-[1px] border-richblack-700 bg-richblack-800"
          ref={ref}
        >
          {/* Dashboard */}
          {/* <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100">
              <VscDashboard className="text-lg" />
              Dashboard
            </div>
          </Link> */}

          {/* Home */}
          <Link to="/" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 border-y border-richblack-700 ">
              <AiOutlineHome className="text-lg" />
              Home
            </div>
          </Link>

          {/* Catalog */}
          <div>
            <div
              className="flex w-full items-center gap-x-1 py-[10px] px-[5px] text-sm text-richblack-100 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <PiNotebook className="text-small" />
              More Services
            </div>
            {/* Training */}
            <Link to="/catalog/training" onClick={() => setOpen(false)}>
              <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100">
                Training
              </div>
            </Link>
            {/* IT Staffing */}
            <Link to="/catalog/it-staffing" onClick={() => setOpen(false)}>
              <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100">
                IT Staffing
              </div>
            </Link>
          </div>

          {/* About Us */}
          <Link to="/about" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 border-y border-richblack-700 ">
              <TbMessage2Plus className="text-lg" />
              About Us
            </div>
          </Link>

          {/* Contact Us */}
          <Link to="/contact" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 ">
              <MdOutlineContactPhone className="text-lg" />
              Contact Us
            </div>
          </Link>

          {/* Logout */}
          {/* <div
            onClick={() => setOpen(false)}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div> */}
        </div>
      )}
    </button>
  );
}
