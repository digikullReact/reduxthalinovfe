import React from 'react'
import { useDispatch } from 'react-redux';
import {addTothali} from "../reducers/index";



const Product = ({data}) => {


  const dispatch=useDispatch();
const add=(item)=>{
  dispatch(addTothali(item));

}


  return (
    <div className='col-4'>
        <div className="card" style={{width:"18rem"}}>
  <img width="100%" height="100%" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary" onClick={()=>add(data)}>Add To Thali</a>
  </div>
</div>

    </div>
  )
}

export default Product