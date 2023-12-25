import Carousel from '../../components/carousel/Carousel';

const Home = () => {
  return (
    <div>
      <section className="h-screen w-full flex items-center">
        <Carousel />
      </section>
      <section className="bg-red-400 h-screen"></section>
    </div>
  );
};

export default Home;
