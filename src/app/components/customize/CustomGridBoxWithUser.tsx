import React from "react";
import Link from "next/link";

interface CustomGridBoxWithUserProps {
    topic: string;
    postedBy: string,
    href: string;
}

const CustomGridBoxWithUser: React.FC<CustomGridBoxWithUserProps> = ({ topic, postedBy, href }) => {
    return (
        <Link href={href} className='block border border-middleGrey border-opacity-25 text-babyPowder rounded-lg p-8 hover:bg-graniteGrey group'>
            <div className='flex justify-between items-center'>
                <h2 className='text-xl font-medium ml-12'>{topic}</h2>

                <div className='flex justify-between font-extralight opacity-25 group-hover:opacity-100'>
                    <p className='mr-20'>Posted by {postedBy}</p>
                </div>
            </div>
        </Link>
    );
};

export default CustomGridBoxWithUser;