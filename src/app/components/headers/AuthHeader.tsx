import React from "react";
import Image from "next/image";
import Link from "next/link";

const AuthHeader: React.FC = () => {
  return (
    <nav className="flex justify-between items-center border border-b-middleGrey bg-chineseBlack p-6">
      <div>
        <Image src="/assets/logos/brainify.png" alt="Brainify logo" width={180} height={50} />
      </div>

      <div className="flex space-x-14 mx-20">
        <Link href="#">
          {/* TODO: link a page */}
          <div className="border border-middleGrey px-8 py-2 text-xl text-middleGrey rounded-lg hover:bg-middleGrey hover:text-babyPowder">
            Sign up
          </div>
        </Link>

        <Link href="#">
          {/* TODO: link a page */}
          <div className="text-xl text-middleGrey hover:text-babyPowder">
            Log in
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default AuthHeader;
