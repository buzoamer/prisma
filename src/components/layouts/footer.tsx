import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-slate-800 to-transparent rounded-t-md text-white py-3 bottom-0 w-full">
      <div className="text-center">
        <p className='text-sm font-l'>
          UD Bastion - {''}
          <Link target='_blank' href="https://www.linkedin.com/in/amerbuzo/" className="font-semibold hover:text-base hover:text-blue-500">
            Amer Bužo
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;