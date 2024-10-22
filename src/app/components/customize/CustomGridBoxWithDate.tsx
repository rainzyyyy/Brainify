import React from "react";
import Link from "next/link";

interface CustomerGridBoxWithDateProps {
    topic: string;
    datePosted: string;
    href: string;
}

const CustomGridBoxWithDate: React.FC<CustomerGridBoxWithDateProps> = ({ topic, datePosted, href }) => {
    return (
        <Link href={href} className='block border border-middleGrey border-opacity-25 text-babyPowder rounded-lg p-8 hover:bg-graniteGrey group'>
            <div className='flex justify-between items-center'>
                <h2 className='text-xl font-medium ml-12'>{topic}</h2>

                <div className='flex justify-between font-extralight opacity-25 group-hover:opacity-100'>
                    <p className='mr-20'>Posted on {datePosted}</p>
                </div>
            </div>
        </Link>
    );
};

export default CustomGridBoxWithDate;