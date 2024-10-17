import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface GoBackButtonProps {
    href: string;
}

const GoBackButton: React.FC<GoBackButtonProps> = ({ href }) => {
    return (
        <Link href={href} className='inline-flex items-center text-lg px-6 py-2 text-middleGrey rounded-lg hover:text-babyPowder'>
            <Image src='/assets/arrows/left-arrow.png' alt="Go back" width={25} height={25} className='mr-4' />
            Go back
        </Link>
    );
};

export default GoBackButton;
