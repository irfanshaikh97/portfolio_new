import Socials from '@/components/Socials';
import { HeroHighlight, Highlight } from '@/components/UI/HeroHighlight';
import { about } from '@/utils/data';
import { Button, Image, Link } from '@nextui-org/react';
import { ChevronRight, DownloadIcon } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Irfan shaikh Portfolio | Home",
    openGraph: {
      title: "Irfan shaikh Portfolio | Home",
      url: "https://irfanshaikh-portfolio.netlify.app",
      images: [
        {
          url: "https://i.ibb.co/5k6rdvF/tabicon.png",
          alt: "portfolio-logo",
        },
      ],
    },
    twitter: {
      title: "IS Portfolio | Home",
      images: [
        {
          url: "https://i.ibb.co/5k6rdvF/tabicon.png",
          alt: "portfolio-logo",
        },
      ],
    },
  };
export default function Home() {
    return (
        <>
            <HeroHighlight className='px-6'>
                <div className='grid gap-8 lg:gap-0 items-center'>
                    <div className='z-10 text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '>
                        <p className='text-4xl md:text-5xl lg:text-8xl mb-4'>
                            I'm {about.name}
                        </p>
                        <div>
                            <Highlight className='text-black dark:text-white block'>
                                {about.position}
                            </Highlight>
                        </div>
                        <Button
                            variant='solid'
                            color='secondary'
                            size='sm'
                            className='mt-16 inline-flex md:hidden'
                            as={Link}
                            href='/Irfan_Shaikh_Frontend_Resume.pdf'
                            download={'irfan_resume'}
                        >
                            Download Resume <DownloadIcon size={18} />
                        </Button>
                        <Button
                            variant='solid'
                            color='secondary'
                            size='lg'
                            className='mt-16 hidden md:inline-flex'
                            as={Link}
                            href='/Irfan_Shaikh_Frontend_Resume.pdf'
                            download={'irfan_resume'}
                        >
                            Download Resume <DownloadIcon size={18} />
                        </Button>
                        <Button
                            variant='faded'
                            color='secondary'
                            size='sm'
                            className='mt-16 inline-flex md:hidden ml-2'
                            as={Link}
                            href='/about'
                        >
                            Know More <ChevronRight size={18} />
                        </Button>
                        <Button
                            variant='faded'
                            color='secondary'
                            size='lg'
                            className='mt-16 hidden md:inline-flex ml-2'
                            as={Link}
                            href='/about'
                        >
                            Know More <ChevronRight size={18} />
                        </Button>
                        <Socials />
                    </div>
                </div>
            </HeroHighlight>
        </>
    );
}