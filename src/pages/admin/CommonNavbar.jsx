import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import {
  ExcelIcon,
  HeaderIcon,
  PDFIcon,
  PlusIcon,
  PrintIcon,
} from "@/components/common/icons/CustomIcons";
import { Modal } from "antd";
import CreateNewSale from "@/components/common/CreateNewSale";
import ExportCustomersPDF from "@/components/CustomerDatabase/ExportCustomersPDF";
import TitleComponent from "./TitleComponent";
import ArtSellerSearchModal from "../GalleryList/ArtSellerSearchModal";

const CommonNavbar = ({ open, setOpen }) => {
  const { pathname } = useLocation();
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [exportPdfModal, setExportPdfModal] = useState(false);

  return (
    <div
      className="w-full rounded-[16px] px-4 sm:px-6 md:px-10 py-4 md:py-6 
        flex flex-col md:flex-row items-center justify-between gap-6
        bg-gradient-to-r from-[#03071A] via-[#1D4FD7] via-70% to-[#0D9389]"
    >
      {/* === Left Section === */}
      <div className="w-full md:w-auto flex items-center  md:justify-start gap-4">
        {/* Mobile Hamburger */}
        <span
          onClick={() => setOpen(!open)}
          className="block md:hidden cursor-pointer"
        >
          <GiHamburgerMenu color="white" size={26} />
        </span>

        {/* Page Title */}
        <TitleComponent pathname={pathname} />

        {/* Logo / Header Icon */}
        <div className="hidden lg:flex items-center gap-3">
          <HeaderIcon className="size-6 sm:size-8 md:size-10 xl:size-12" />
        </div>
      </div>

      {/* === Right Section (Action Buttons) === */}
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        {/* PDF Icon */}
        <span
          onClick={() => setExportPdfModal(true)}
          className="w-[42px] h-[42px] sm:w-[50px] sm:h-[50px]  xl:w-[70px] xl:h-[70px]
            rounded-full flex justify-center items-center p-3 cursor-pointer
            bg-[rgba(255,255,255,0.18)]
            shadow-[inset_0_1px_6.1px_rgba(0,0,0,0.25)]
            drop-shadow-[0_4px_10.9px_rgba(255,255,255,0.25)]
            backdrop-blur-[2px]
            hover:scale-110 transition-transform duration-300"
        >
          <PDFIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </span>

        {/* Excel Icon */}
        <span
          className="w-[42px] h-[42px] sm:w-[50px] sm:h-[50px]  xl:w-[70px] xl:h-[70px]
            rounded-full flex justify-center items-center p-3 cursor-pointer
            bg-[rgba(255,255,255,0.18)]
            shadow-[inset_0_1px_6.1px_rgba(0,0,0,0.25)]
            drop-shadow-[0_4px_10.9px_rgba(255,255,255,0.25)]
            backdrop-blur-[2px]
            hover:scale-110 transition-transform duration-300"
        >
          <ExcelIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </span>

        {/* Print Icon */}
        <span
          className="w-[42px] h-[42px] sm:w-[50px] sm:h-[50px]  xl:w-[70px] xl:h-[70px]
            rounded-full flex justify-center items-center p-3 cursor-pointer
            bg-[rgba(255,255,255,0.18)]
            shadow-[inset_0_1px_6.1px_rgba(0,0,0,0.25)]
            drop-shadow-[0_4px_10.9px_rgba(255,255,255,0.25)]
            backdrop-blur-[2px]
            hover:scale-110 transition-transform duration-300"
        >
          <PrintIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </span>

        {/* Add Icon */}
        <span
          onClick={() =>
            pathname === `/galleries-list`
              ? setModal2Open(true)
              : setModal1Open(true)
          }
          className="w-[42px] h-[42px] sm:w-[50px] sm:h-[50px]  xl:w-[70px] xl:h-[70px]
            rounded-full flex justify-center items-center cursor-pointer
            bg-[#3F59D2]
            shadow-[0_4px_9.5px_3px_rgba(255,255,255,0.25)]
            backdrop-blur-[24px]
            hover:scale-110 transition-transform duration-300"
        >
          <PlusIcon className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
        </span>
      </div>

      {/* === Modals === */}
      <Modal
        open={exportPdfModal}
        width={1000}
        onCancel={() => setExportPdfModal(false)}
        footer={null}
      >
        <ExportCustomersPDF />
      </Modal>

      <Modal
        open={modal1Open}
        width={700}
        onCancel={() => setModal1Open(false)}
        footer={null}
      >
        <CreateNewSale />
      </Modal>

      <Modal
        open={modal2Open}
        width={700}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <ArtSellerSearchModal />
      </Modal>
    </div>
  );
};

export default CommonNavbar;
