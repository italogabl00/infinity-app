import React, { useState } from "react";
import classNames from "classnames";
import { SwitchProps } from "../interfaces/switchprops";

const Switch: React.FC<SwitchProps> = ({
  className,
  onToggle,
}): JSX.Element => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleClick = (): void => {
    const newValue = !isSelected;
    setIsSelected(newValue);
    if (onToggle) {
      onToggle(newValue);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={classNames(
        "flex w-60 h-10 mb-44 text-inred bg-ingrey bg-opacity-60 rounded-md transition-all duration-500 outline outline-2 outline-ingrey",
        className
      )}
    >
      <span
        className={classNames(
          "flex items-center  justify-center h-10 w-full gap-5 bg-ingrey font-extrabold rounded-md transition-all duration-500 shadow-lg tracking-wider text-inw text-xl"
        )}
      >
        <span
          className={classNames(
            "base-class",
            "transition-opacity duration-300",
            {
              "opacity-30": !isSelected,
              "ml-2": !isSelected,
            }
          )}
        >
          TECHS
        </span>
        <span
          className={classNames(
            "base-class",
            "transition-opacity duration-300",
            {
              "opacity-30": isSelected,
              "mr-2": isSelected,
            }
          )}
        >
          CRIATIVOS
        </span>

        {/* {isSelected ? 'TECHS' : 'CRIATIVOS'} */}
      </span>
    </div>
  );
};

export default Switch;
