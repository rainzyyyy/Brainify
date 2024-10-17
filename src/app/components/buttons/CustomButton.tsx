import React from "react";
import Link from "next/link";

interface CustomButtonProps {
    label: string;
    href: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, href }) => {
    return (
        <Link href={href} className='inline-block px-14 py-3 text-babyPowder bg-middleGrey rounded-lg text-center hover:bg-graniteGrey'>
            {label}
        </Link>
    );
};

export default CustomButton;
