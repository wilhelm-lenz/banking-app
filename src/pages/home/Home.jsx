import Payments from "../../components/payments/Payments";
import "./Home.scss";

const Home = () => {
  return (
    <main className="main">
      <h1 className="heading-primary">Banana Bank</h1>
      <Payments />
    </main>
  );
};

export default Home;
