import React from 'react';
import { facebookicon, hero1, logo1, youtubeicon } from '../../assets/images';

const Footer = () => {
  return (
    <div className="bg-primary pt-[85px] pb-[60px] relative">
      <div className="flex flex-col md:flex-row mx-6 lg:mx-auto xl:w-[1170px] 2xl:w-[1320px] justify-between mb-[75px]">
        <img
          className="w-max h-[77px] md:h-[84px] mb-[60px] md:mb-0"
          src={logo1}
          alt=""
        />

        <div className="mb-[60px] md:mb-0">
          <p className="body-bold-uppercase text-white mb-[28px]">
            list Menu :
          </p>
          <ul className="text-white space-y-[20px]">
            <li className="body-regular-uppercase">Home</li>
            <li className="body-regular-uppercase">About Us</li>
            <li className="body-regular-uppercase">Services</li>
          </ul>
        </div>
        <div className="text-white">
          <p className="body-bold-uppercase mb-[24px]">Kontak Kami</p>
          <div className="space-y-[20px] mb-[60px]">
            <div className="link-regular-16px text-secondary cursor-pointer hover:text-button">
              awan72.ra@gmail.com
            </div>
            <div className="link-regular-16px text-secondary cursor-pointer hover:text-button">
              +6282116443390
            </div>
          </div>
          <p className="body-bold-uppercase mb-[24px]">Social Media Kami</p>
          <div className="flex space-x-[16px]">
            <img src={youtubeicon} alt="" />
            <img src={facebookicon} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-baseline md:flex-row  space-y-[20px] md:space-x-[134px] justify-center w-full">
        <p className="body-2-light">© Sevenlay, 2021. All Rights Reserved.</p>
        <p className="link-light-14px mb-[60px]">Kebijakan pribadi</p>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
