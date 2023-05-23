import React from "react";

interface CustomTextProps {
  color: string;
  children: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({ color, children }) => {
  return <p style={{ color }}>{children}</p>;
};

export default CustomText;
