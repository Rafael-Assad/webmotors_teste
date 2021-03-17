import { AiFillCar } from "react-icons/ai";
import { FaMotorcycle } from "react-icons/fa";
import { Container, TabContainer } from "./style";

const Tabs = () => {
  return (
    <Container>
    <TabContainer>
      
        <div className="tabsItem car">
          <AiFillCar />
          <span>
            <p>Compar</p>
            <p>CARROS</p>
          </span>
        </div>

        <div className="tabsItem moto">
          <FaMotorcycle />
          <span>
            <p>Comprar</p>
            <p>MOTOS</p>
          </span>
        </div>

    </TabContainer>

    <button>Vender meu carro</button>
    </Container>
  );
};

export default Tabs;
