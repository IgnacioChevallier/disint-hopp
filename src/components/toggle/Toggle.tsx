import {cva} from "class-variance-authority";

const toggleBackground = cva(
    "relative inline-block w-12 h-6 cursor-pointer transition-colors duration-300 rounded-full p-0.5",
    {
        variants: {
            selected: {
                true: "bg-primary",
                false: "bg-gray-300",
            },
        },
    }
);

const toggleSlider = cva(
    "absolute w-5 h-5 bg-white rounded-full transition-transform duration-300",
    {
        variants: {
            selected: {
                true: "transform translate-x-6",
                false: "transform translate-x-0",
            },
        },
    }
);

export const Toggle = ({ selected, onClick }: { selected: boolean; onClick: () => void }) => {
    return (
        <label>
            <input
                type="checkbox"
                className="hidden"
                checked={selected}
                onChange={onClick}
            />
            <span className={toggleBackground({ selected })}>
                <span className={toggleSlider({ selected })}></span>
            </span>
        </label>
    );
};
