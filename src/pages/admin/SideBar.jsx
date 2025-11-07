import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLogOutOutline, IoEyeOutline } from "react-icons/io5";
import { Title12, Title14, Title24 } from "@/components/common/Title";
import avatar from "@/assets/images/avatar.png";
import SelectUserModal from "@/components/userSalesPreview/SelectUserModal";
import Modal from "antd/es/modal/Modal";
import ProfileEditModal from "./ProfileEditModal";

const SideBar = ({ sidebar, open, setOpen }) => {
  const location = useLocation();
  const [activeParentIndex, setActiveParentIndex] = useState(null);
  const [userDropdown, setUserDropdown] = useState(false);

  // Detect active parent link based on current path
  useEffect(() => {
    sidebar.forEach((item, index) => {
      if (item.sublink) {
        const activeSub = item.sublink.find(
          (sub) => sub.path === location.pathname
        );
        if (activeSub) {
          setActiveParentIndex(index);
        }
      }
    });
  }, [location.pathname, sidebar]);

  const isActive = (path) => path === location.pathname;

  const isParentActive = (item) => {
    if (!item.sublink) return isActive(item.path);
    return item.sublink.some((sub) => isActive(sub.path));
  };

  const toggleSubmenu = (index) => {
    setActiveParentIndex((prev) => (prev === index ? null : index));
  };

  const toggleUserDropdown = () => {
    setUserDropdown((prev) => !prev);
  };

  const [selectUser, setSelectUser] = useState(false);

  const [profileEdit, setProfileEdit] = useState(false);

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } xl:hidden z-50`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`h-full py-6 ${
          open
            ? "left-0 top-0 w-[300px] z-[220] shadow-lg bg-[#03081D] text-[#f7f7f7] overflow-y-auto"
            : "-left-full xl:w-[300px] w-[320px]"
        } bg-[#03081D] backdrop-blur-md lg:px-6 px-4 flex flex-col gap-8 shadow-md xlg:static fixed transition-all duration-300`}
      >
        {/* Logo and user card */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div className="flex flex-col gap-2">
            <Title24>Ben Ari Group Corp.</Title24>
            <Title14>Business Management Platform</Title14>
          </div>

          {/* User card */}
          <div
            className="px-6 flex gap-4 py-2 rounded-lg cursor-pointer relative"
            style={{
              background:
                "linear-gradient(90deg, #03071A 0%, #1D4FD7 50%, #137BA4 75%, #0D9389 100%)",
            }}
            onClick={toggleUserDropdown}
          >
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img src={avatar} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <Title14>John Doe</Title14>
              <Title12>Admin</Title12>
            </div>

            {/* User dropdown */}
            {userDropdown && (
              <div className="absolute top-full left-0 w-full mt-2 bg-[#1B1F3B] rounded-md shadow-lg z-50 overflow-hidden">
                <div
                  className="flex items-center gap-2 px-4 py-2 !text-white  transition-colors"
                  onClick={() => {
                    setOpen(false);
                    setUserDropdown(false);
                  }}
                >
                  <IoEyeOutline />
                  <span onClick={() => setProfileEdit(true)}>
                    Profile
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 px-4 py-2 !text-white  transition-colors"
                  onClick={() => {
                    setOpen(false);
                    setUserDropdown(false);
                  }}
                >
                  <IoEyeOutline />
                  <span onClick={() => setSelectUser(true)}>
                    User sales page perview
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 px-4 py-2 !text-white  cursor-pointer transition-colors"
                  onClick={() => {
                    setOpen(false);
                    setUserDropdown(false);
                    // Add your logout logic here
                    console.log("Logging out...");
                  }}
                >
                  <IoLogOutOutline />
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3 relative mt-4">
          {sidebar?.map((item, index) => {
            const parentActive = isParentActive(item);

            return !item?.sublink ? (
              <Link
                key={index}
                to={item?.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
                  isActive(item?.path)
                    ? "bg-gray-400 text-black"
                    : "text-white hover:bg-[#2B2F4B]"
                }`}
              >
                <span className="text-lg">{item?.icon}</span>
                {item?.text}
              </Link>
            ) : (
              <div key={index} className="relative">
                {/* Parent link */}
                <div
                  className={`flex items-center justify-between px-4 py-2 cursor-pointer w-full rounded-lg transition-all duration-200 ${
                    parentActive
                      ? "text-white"
                      : "text-white hover:bg-[#2B2F4B]"
                  }`}
                  onClick={() => toggleSubmenu(index)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{item?.icon}</span>
                    <p className="font-medium">{item?.text}</p>
                  </div>
                  <span
                    className={`transform transition-transform duration-300 ${
                      activeParentIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <MdKeyboardArrowDown size={20} />
                  </span>
                </div>

                {/* Sublinks dropdown */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden px-4 rounded-lg ${
                    activeParentIndex === index
                      ? "max-h-[500px] py-4 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-2"
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    {item?.sublink?.map((value, subIndex) => (
                      <Link
                        key={subIndex}
                        to={value?.path}
                        className={`block px-4 py-2 rounded-md transition-colors duration-200 ${
                          isActive(value?.path)
                            ? "bg-gray-400 text-black"
                            : "text-white hover:bg-[#2B2F4B]"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {value?.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectUser && (
        <SelectUserModal
          selectUser={selectUser}
          setSelectUser={setSelectUser}
        />
      )}

       <Modal
        open={profileEdit}
        width={700}
        onOk={() => setProfileEdit(false)}
        onCancel={() => setProfileEdit(false)}
        footer={null}
      >
        <ProfileEditModal />
      </Modal>
    </>
  );
};

export default SideBar;
