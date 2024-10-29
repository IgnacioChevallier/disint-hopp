import { cva } from "class-variance-authority";
import Icon from "../icon/Icon";

const routeDirectionVariant =
    "flex items-center text-gray-800 w-[384px] h-[90px] p-2 gap-2";

export interface RouteDirectionProps {
    iconName?: string;
    label?: string;
}

export const RouteDirection = ({
                                   iconName = "direction",
                                   label = "Route Direction"
                               }: RouteDirectionProps) => {
    return (
        <div className={routeDirectionVariant}>
            <div className="flex justify-center items-center w-12 h-12 min-w-12 min-h-12 bg-gray-200 rounded-full flex-shrink-0">
                <Icon name={iconName} size="medium" />
            </div>
            <span className="text-base flex-grow overflow-hidden line-clamp-3">
                {label}
            </span>
        </div>
    );
};
