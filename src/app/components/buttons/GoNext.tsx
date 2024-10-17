import React from "react";
import Link from 'next/link';
import Image from 'next/image';

interface GoNextButtonProps {
    href: string;
}

const GoNextButton: React.FC<GoNextButtonProps> = ({ href }) => {
    return (
        <Link href={href} className='inline-flex items-center text-lg px-6 py-2 text-middleGrey rounded-lg hover:text-babyPowder'>
            Next
            <Image src='/assets/arrows/right-arrow.png' alt="Quiz" width={25} height={25} className='ml-4' />
        </Link>
    );
};

export default GoNextButton;
