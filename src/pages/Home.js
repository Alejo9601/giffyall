import GifGrid from "../components/GifGrid";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <GifGrid gifsFor="marvel" />
    </>
  );
};

export default Home;
