import { facebookicon, hero1, youtubeicon } from '../../assets/images';
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
      <section className="h-[733px] w-full flex items-center relative">
        <Carousel />
      </section>

      {/* ======================== start section =================================== */}
      <section
        id="about-us"
        className="h-[572px]  flex items-center relative mx-auto w-full 2xl:max-w-[1320px] 2xl:mx-auto"
      >
        {/* left */}
        <div className=" flex flex-col justify-center ">
          {/* <div className="bg-primary h-[452px] w-[894px] absolute" /> */}
          <div className="bg-primary h-[452px] w-[894px] absolute -translate-x-1/2 "></div>
          <div className="bg-primary h-[452px] w-[894px] flex items-center">
            <div className="absolute 2xl:mx-0 mx-[135px] w-[570px] h-auto flex flex-col justify-between">
              <div className="text-white w-auto justify-between h-[151px]  ">
                <h1 className="h2-medium-uppercase pb-[40px]">
                  Dewan Teknologi
                </h1>
                <p className="body-2-regular">
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
        </div>
        {/* right */}
        <div className="absolute right-0 top-0 2xl:mx-0 mx-[135px]">
          <div className=" grid gap-[30px] grid-cols-2 w-[570px] ">
            <div
              style={{ backgroundImage: `url(${hero1})` }}
              className="w-[270px] h-[270px]"
            ></div>
            <div
              style={{ backgroundImage: `url(${hero1})` }}
              className="w-[270px] h-[270px]"
            ></div>
            <div
              style={{ backgroundImage: `url(${hero1})` }}
              className="w-[270px] h-[270px]"
            ></div>
            <div
              style={{ backgroundImage: `url(${hero1})` }}
              className="w-[270px] h-[270px]"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
