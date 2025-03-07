import Socials from '@/components/Socials';
import { LampContainer } from '@/components/UI/Lamp';
import { about } from '@/utils/data';
import { Link } from '@nextui-org/react';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "IS Portfolio | Contact",
    openGraph: {
      title: "IS Portfolio | Contact",
      url: "https://irfanshaikh-portfolio.netlify.app/contact",
      images: [
        {
          url: "https://i.ibb.co/5k6rdvF/tabicon.png",
          alt: "portfolio-logo",
        },
      ],
    },
    twitter: {
      title: "IS Portfolio | Contact",
      images: [
        {
          url: "https://i.ibb.co/5k6rdvF/tabicon.png",
          alt: "portfolio-logo",
        },
      ],
    },
  };

const Page = () => {
    return (
        <>
            <LampContainer>
                <div className='container text-center'>
                    <h2 className='text-sm md:text-lg mb-4'>Contact me at</h2>
                    <Link
                        href={`mailto:${about.details.email}`}
                        className='text-2xl md:text-4xl lg:text-7xl font-semibold text-gray-200 underline lg:mb-6'
                    >
                        {about.details.email}
                    </Link>
                    <Socials emailShow={false} />
                </div>
            </LampContainer>
        </>
    );
};

export default Page;
