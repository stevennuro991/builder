import React from "react";
import { IoMdClose } from "react-icons/io";

const ModalOverlay = ({ children, setModalOn, type = "" }) => {
    return (
        <div className="fixed w-full h-full inset-0 bg-gray-800 bg-opacity-70 flex flex-col justify-center z-[900] items-center">
            {type === "datePicker" || (
                <IoMdClose
                    onClick={() => {
                        setModalOn((modal) => {
                            return { ...modal, [type]: false }
                        });
                    }}
                    className="absolute top-2 right-2 xs:top-3 xs:right-3 md:text-white w-8 h-8 cursor-pointer"
                />
            )}
            {children}
        </div>
    );
};

export default ModalOverlay;