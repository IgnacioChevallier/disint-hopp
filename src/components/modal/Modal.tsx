import {ReactNode} from "react";
import {cva, VariantProps} from "class-variance-authority";
import {createPortal} from "react-dom";
import {Button} from "../button/Button";

const modalVariant = cva("flex flex-row gap-2 outline-none", {
    variants: {
        color: {
            primary: "",
            danger: "",
        },
    },
    defaultVariants: {
        color: "primary",
    },
});


export interface ModalProps extends VariantProps<typeof modalVariant> {
    children?: ReactNode;
    title?: string;
    open?: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export const Modal = ({
                          children,
                          title,
                          open,
                          onClose,
                          onConfirm,
                          color,
                      }: ModalProps) => {

    if (!open) return null;
    const modalRoot = document.getElementById('modal-root');

    if (!modalRoot) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative bg-white rounded-lg shadow-lg max-w-lg py-2 px-4 z-10 flex flex-col gap-4">
                <div className={`flex w-full items-center justify-center text-${color}`}>
                    {title}
                </div>
                <div className="flex justify-center">{children}</div>
                <div className="flex justify-center gap-4">
                    <Button color={color === "primary" ? "danger" : "primary"} variant="outlined"
                            onClick={onClose}
                            text={"Cancel"}
                            size="small"
                    />
                    <Button color={color === "primary" ? "primary" : "danger"}
                            onClick={onConfirm}
                            text={"Confirm"}
                            size="small"
                    />
                </div>
            </div>
        </div>,
        modalRoot
    );
}