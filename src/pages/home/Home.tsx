import { bgroad, facebookicon, hero1, youtubeicon } from '../../assets/images';
import {
  ButtonPrimaryDarkNormal,
  ButtonPrimaryLightNormal,
  ButtonSeconcaryLightNormal,
  ButtonSeconcaryLightNormal1,
  ButtonSecondaryDarkNormal,
} from '../../components/button/buttons';
import Carousel from '../../components/carousel/Carousel';

const Home = () => {
  return (
    <div>
      <section className="h-[733px] w-full flex items-center ">
        <Carousel />
      </section>

      {/* ======================== start section =================================== */}
      <section
        id="about-us"
        className=" flex-col lg:flex-row lg:h-[572px] flex items-center relative xl:mx-auto xl:max-w-[1180px] 2xl:max-w-[1320px] 2xl:mx-auto lg:mb-[100px] "
      >
        {/* left */}
        <div className="flex flex-col justify-center w-full">
          <div className="bg-primary  lg:h-[452px] lg:w-[894px] lg:absolute translate-y-24 lg:translate-y-0 lg:-translate-x-1/2 "></div>
          <div className="bg-primary  h-[452px] lg:w-[894px] flex items-center">
            <div className="absolute 2xl:mx-0 mx-6 xl:mx-0 lg:w-[570px] h-auto flex flex-col justify-between">
              <div className="text-white w-auto justify-between h-[151px] mb-[24px] lg:mb-[34px]">
                <h1 className="h2-medium-uppercase pb-[40px]">
                  Dewan Teknologi
                </h1>
                <p className="body-2-regular  ">
                  Kami berkontribusi pada penciptaan sistem softwere yang
                  efisie, pemberantasan korupsi dan pemulihan Teknologi
                </p>
              </div>
              <div className="flex pb-[40px]">
                <ButtonPrimaryLightNormal
                  buttontext={'Bergabung'}
                  className="mr-[30px]"
                />

                <ButtonSeconcaryLightNormal
                  buttontext="Pelajari Lebih Lanjut"
                  className=""
                />
              </div>
              <div className="flex">
                <img className="mr-[16px]" src={facebookicon} alt="" />
                <img src={youtubeicon} alt="" />
              </div>
            </div>
          </div>
          <span className="h-[78px] lg:h-0 w-full lg:w-0 bg-primary -translate-y-1 "></span>
        </div>
        {/* right */}
        <div className="relative z-20 lg:absolute right-0 top-0 2xl:mx-0 xl:mx-[0px] mx-6 -translate-y-1/4 md:-translate-y-24 lg:-translate-y-0">
          <div className="grid gap-[30px] grid-cols-2 lg:-w-[570px] ">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 w-[155px] h-[155px] sm:w-[270px] sm:h-[270px]">
              <img
                src={hero1}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 w-[155px] h-[155px] sm:w-[270px] sm:h-[270px]">
              <img
                src={hero1}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 w-[155px] h-[155px] sm:w-[270px] sm:h-[270px]">
              <img
                src={hero1}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 w-[155px] h-[155px] sm:w-[270px] sm:h-[270px]">
              <img
                src={hero1}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            {/* <div
              style={{ backgroundImage: `url(${hero1})` }}
              className="w-[155px] h-[155px] md:w-[270px] md:h-[270px]"
            ></div> */}
          </div>
        </div>
      </section>
      {/* ======================== end section =================================== */}

      {/* ======================== start section =================================== */}
      <section
        id="action"
        className="responsivecoloring h-auto w-full relative"
      >
        <img
          src={bgroad}
          alt=""
          className="object-cover h-[265px] lg:h-[153px] w-full "
        />
        <div className="absolute z-10 top-0  w-full h-full  ">
          <div className="mx-6 flex flex-col lg:flex-row justify-around lg:justify-between items-center h-full xl:mx-auto md:max-w-[1180px] 2xl:max-w-[1320px]">
            <p className="h2-medium text-white">
              Apakah organisasi Anda ingin menjadi anggota kami?
            </p>
            <ButtonPrimaryLightNormal buttontext="Bergabung" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
