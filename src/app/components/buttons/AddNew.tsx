import React from "react";
import Link from 'next/link';

interface AddNewButtonProps {
    href: string;
}

const AddNewButton: React.FC<AddNewButtonProps> = ({ href }) => {
    return (
        <Link href={href} className='inline-block px-14 py-3 text-babyPowder bg-middleGrey rounded-lg text-center hover:bg-graniteGrey'>
            New
        </Link>
    );
};

export default AddNewButton;
