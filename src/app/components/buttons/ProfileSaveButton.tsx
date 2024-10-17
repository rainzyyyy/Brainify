import React from "react";
import Link from "next/link";

interface ProfileSaveButtonProps {
    href: string;
}

const ProfileSaveButton: React.FC<ProfileSaveButtonProps> = ({ href }) => {
    return (
        <Link href={href} className='inline-block px-14 py-3 text-babyPowder bg-wageningenGreen rounded-lg text-center hover:bg-ao'>
            Save
        </Link>
    );
};

export default ProfileSaveButton;
