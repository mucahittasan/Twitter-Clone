import MenuBar from "../components/MenuBar";
import Content from "../components/Content";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="main">
      <MenuBar />
      <Content />
      <SideBar />
    </div>
  );
}

export default Home;
