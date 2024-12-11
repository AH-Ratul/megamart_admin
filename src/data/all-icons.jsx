import { AiFillProduct } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FaFileInvoiceDollar, FaReceipt } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { MdDashboard, MdDelete, MdEdit } from "react-icons/md";

const allIcons = {
  dashboard: <MdDashboard />,
  add: <IoMdAddCircle />,
  product: <AiFillProduct />,
  invoice: <FaFileInvoiceDollar />,
  recipt: <FaReceipt />,
  user: <FaUserAlt />,
  del: <MdDelete />,
  edit: <MdEdit />,
};

export default allIcons;
