import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const UsernameSetupHeader: React.FC = () => {
    return (
        <nav className='flex justify-between items-center border border-b-middleGrey bg-chineseBlack p-6'>
            <div>
                <Image src='/assets/logos/brainify.png' alt="Brainify logo" width={180} height={50} />
            </div>

            <div className='flex items-center space-x-14 ml-auto'>
                <Link href="#"> {/* TODO: link to a page */}
                    <span className='text-xl text-middleGrey hover:text-babyPowder'>Set a username</span>
                </Link>

                <Link href="#"> {/* TODO: link to a page */}
                    <Image src='/assets/profile-pictures/jeon-wonwoo.png' alt="Profile picture" width={50} height={50} className='rounded-full mr-16' />
                </Link>
            </div>
        </nav>
    );
};

export default UsernameSetupHeader;
