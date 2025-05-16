import React from "react";
import { FaTrash, FaPencil } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

type Props = {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
};

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: Props) {
  return (
    <div className="float-end">
      <FaPencil
        onClick={() => editModule(moduleId)}
        className="text-primary me-3"
      />
      <FaTrash
        onClick={() => deleteModule(moduleId)}
        className="text-danger me-2 mb-1"
      />
      <BsPlus className="fs-1" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
