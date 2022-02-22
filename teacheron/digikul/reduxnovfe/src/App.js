import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';  /// USed to access the global store
import Product from './components/Product';
import Thali from './components/Thali';



function App() {

  const productData=useSelector(state=>state.counter.products)

  return(
    <div className='container'>
      <Thali/>
    <div className='row' style={{marginTop:"40px"}}> 

      {
        productData.map(ele=>(

          <Product data={ele}/>

        ))
      }


    </div>

  </div>

  )




}

export default App;
