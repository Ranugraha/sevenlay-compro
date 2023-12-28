import { hero1 } from '../../assets/images';
import Carousel from '../../components/carousel/Carousel';

const Home = () => {
  return (
    <div>
      <section className="h-[733px] w-full flex items-center relative">
        <Carousel />
      </section>
      <section id="about-us" className="h-[452px] bg-slate-600 flex">
        {/* left */}
        <div className="bg-blue-100">
          <div className="bg-primary text-white">
            <h1>Dewan Teknologi</h1>
            <p>
              Kami berkontribusi pada penciptaan sistem softwere yang efisie,
              pemberantasan korupsi dan pemulihan Teknologi
            </p>
            <button> </button>
          </div>
          <div className="">Bergabung</div>
          <div className="">Pelajari Lebih Lanjut</div>
        </div>
        {/* right */}
        <div className="">
          <div className="bg-blue-200 grid gap-[30px] grid-cols-2 w-[570px]">
            {/* <div className="h-3 w-3 bg-slate-50"></div>
          <div className="h-3 w-3 bg-slate-500"></div>
          <div className="h-3 w-3 bg-slate-900"></div>
          <div className="h-3 w-3 bg-red-600"></div> */}

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
