import { ReactElement } from "react";
import { clsx } from "clsx";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const buttonVariants = {
  variants: {
    primary: "text-white bg-indigo-700 hover:bg-indigo-500",
    secondary: "text-indigo-500 bg-gray-900 hover:bg-gray-700",
  },
  size: {
    sm: "text-sm rounded px-2",
    md: "text-md rounded-md px-4",
    lg: "text-lg rounded-lg px-6",
  },
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        buttonVariants.variants[props.variant],
        buttonVariants.size[props.size],
        "py-2",
        "flex items-center",
        "transition-all ease-in-out hover:scale-105"
      )}
    >
      {props.startIcon}
      <span className="px-2">{props.text}</span>
      {props.endIcon}
    </button>
  );
};
