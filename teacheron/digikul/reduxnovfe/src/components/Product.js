import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {addTothali} from "../reducers/index";



const Product = ({data}) => {
  const [quantity,setQuantity]=useState(1);


  const dispatch=useDispatch();
const add=(item)=>{
  item = JSON.parse(JSON.stringify(item));
  item.quantity=quantity;
  item.totalPrice=Number(item.quantity)*Number(item.price)
  dispatch(addTothali(item));

}

const increment=()=>{
  setQuantity(quantity+1)

}


const decrement=()=>{
  if(quantity>1)
  {
    setQuantity(quantity-1)
  }


}

  return (
    <div className='col-4'>
        <div className="card" style={{width:"18rem"}}>
  <img width="100%" height="100%" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary" onClick={()=>add(data)}>Add To Thali</a>

    <div class="input-group">
                                    <span className="input-group-btn">
                                        <button type="button" className="quantity-left-minus btn btn-danger btn-number"  onClick={decrement} >
                                          <span className="glyphicon glyphicon-minus">-</span>
                                        </button>
                                    </span>
                                    <input type="text" id="quantity" name="quantity" className="form-control input-number" value={quantity} min="1" max="100"/>
                                    <span className="input-group-btn">
                                        <button type="button" class="quantity-right-plus btn btn-success btn-number" onClick={increment}>
                                            <span className="glyphicon glyphicon-plus">+</span>
                                        </button>
                                    </span>
                                </div>
  </div>
</div>


    </div>
  )
}

export default Product