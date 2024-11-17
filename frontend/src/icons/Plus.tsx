import clsx from "clsx";
import { IconProps, IconTypes } from ".";

export const Plus = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="none"
      className={clsx(
        IconTypes.size[props.size],
        props.color ? props.color : "fill-black"
      )}
    >
      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
    </svg>
  );
};
