import Carousel from '../../components/carousel/Carousel';

const Home = () => {
  return (
    <div>
      <section className="h-[733px] w-full flex items-center bg-slate-500">
        <Carousel />
      </section>
      <section className="bg-red-400 h-screen"></section>
    </div>
  );
};

export default Home;
