import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";
import Leftside from "../components/Leftside";


const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    
    <main>


    


<Leftside/>

     
      <div className="items-container">
    
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
