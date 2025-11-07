import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import React, { use, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import {
  ExcelIcon,
  HeaderIcon,
  PDFIcon,
  PlusIcon,
  PrintIcon,
} from "@/components/common/icons/CustomIcons";
import { Title14, Title24 } from "@/components/common/Title";
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
      className=" w-full flex items-center gap-5 justify-between p-10 rounded-[16px]"
      style={{
        background:
          "linear-gradient(90deg, #03071A 0%, #1D4FD7 50%, #137BA4 75%, #0D9389 100%)",
      }}
    >
      <div className="flex items-center gap-4">
        <span
          onClick={() => setOpen(!open)}
          className="xlg:hidden block cursor-pointer"
        >
          <GiHamburgerMenu color="white" size={26} />
        </span>

        <TitleComponent pathname={pathname} />

        <div className=" flex gap-4 items-center">
          <span>
            <HeaderIcon />
          </span>
        </div>
      </div>

      <div className=" flex items-center gap-4">
        <span
          onClick={() => setExportPdfModal(true)}
          className="w-[76px] h-[76px] rounded-full flex justify-center items-center p-4 cursor-pointer 
             bg-[rgba(255,255,255,0.18)] 
             shadow-[inset_0_1px_6.1px_rgba(0,0,0,0.25)] 
             drop-shadow-[0_4px_10.9px_rgba(255,255,255,0.25)] 
             backdrop-blur-[1px]"
        >
          <PDFIcon />
        </span>
        <span
          className="w-[76px] h-[76px] rounded-full flex justify-center items-center p-4  cursor-pointer 
             bg-[rgba(255,255,255,0.18)] 
             shadow-[inset_0_1px_6.1px_rgba(0,0,0,0.25)] 
             drop-shadow-[0_4px_10.9px_rgba(255,255,255,0.25)] 
             backdrop-blur-[1px]"
        >
          <ExcelIcon />
        </span>
        <span
          className="w-[76px] h-[76px] rounded-full flex justify-center items-center p-4  cursor-pointer 
             bg-[rgba(255,255,255,0.18)] 
             shadow-[inset_0_1px_6.1px_rgba(0,0,0,0.25)] 
             drop-shadow-[0_4px_10.9px_rgba(255,255,255,0.25)] 
             backdrop-blur-[1px]"
        >
          <PrintIcon />
        </span>
        {pathname === `/galleries-list` ? (
          <span
            onClick={() => setModal2Open(true)}
            className="w-[76px] h-[76px] rounded-[34.5px]  cursor-pointer 
             bg-[#3F59D2] 
             shadow-[0_4px_9.5px_3px_rgba(255,255,255,0.25)] 
             backdrop-blur-[23.85px] 
             flex items-center justify-center"
          >
            <PlusIcon />
          </span>
        ) : (
          <span
            onClick={() => setModal1Open(true)}
            className="w-[76px] h-[76px] rounded-[34.5px]  cursor-pointer 
             bg-[#3F59D2] 
             shadow-[0_4px_9.5px_3px_rgba(255,255,255,0.25)] 
             backdrop-blur-[23.85px] 
             flex items-center justify-center"
          >
            <PlusIcon />
          </span>
        )}
      </div>
      <Modal
        open={exportPdfModal}
        width={1000}
        onOk={() => setExportPdfModal(false)}
        onCancel={() => setExportPdfModal(false)}
        footer={null}
      >
        <ExportCustomersPDF />
      </Modal>
      <Modal
        open={modal1Open}
        width={700}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
        footer={null}
      >
        <CreateNewSale />
      </Modal>
      <Modal
        open={modal2Open}
        width={700}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <ArtSellerSearchModal />
      </Modal>
    </div>
  );
};

export default CommonNavbar;
