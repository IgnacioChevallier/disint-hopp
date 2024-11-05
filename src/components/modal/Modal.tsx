import React, { HTMLAttributes } from "react";
import {ModalRow, ModalRowProps} from "../modal-row/ModalRow";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    rows: ModalRowProps[]
}

export const Modal = ({ rows, ...props }: ModalProps) => {
    return (
        <div className="flex flex-col" {...props}>
            {rows.map((modalRowProps, index) => (
                <div key={index} className="flex flex-col items-start">
                    <ModalRow {...modalRowProps} />
                </div>
            ))}
        </div>
    );
};
