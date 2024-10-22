import React from "react";
import Link from "next/link";

interface ProfileCustomButtonProps {
    label: string;
    href: string;
}

const ProfileCustomButton: React.FC<ProfileCustomButtonProps> = ({ label, href }) => {
    return (
        <Link href={href} className='inline-block border border-middleGrey px-14 py-3 text-babyPowder opacity-50 rounded-lg text-center hover:bg-graniteGrey hover:opacity-100'>
            {label}
        </Link>
    );
};

export default ProfileCustomButton;
