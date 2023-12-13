import Products from './components/product/Products';
import Features from './components/features/Features';
import Landing from './pages/landing/page';


import { products } from '../../utils/products';
import Container from './components/Container';
import ProductCard from './components/product/ProductCard';



const Home: React.FC = () => {
  return (
      <Container >
        <Landing /> 
      </Container>
  );
};

export default Home;