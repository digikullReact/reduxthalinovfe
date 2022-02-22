import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  products:[
    {
      "imageCredit": {
        "artist": "Martin Wessely",
        "link": "http://www.resplashed.com/photographer/martin_wessely/"
      },
      "tags": [
        "Trees"
      ],
      "imageUrl": "http://www.resplashed.com/img/400_002e1ecb8bd2.jpg",
      "filename": "400_002e1ecb8bd2.jpg",
      "imageHash": "2b1d5b5ef4b37b4f5d0dccade1b69987",
      "price": 10.99,
      "name": "Handcrafted Trees Mug",
      "description": "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur",
      "slug": "Handcrafted-Trees-Mug",
      "added": 1485723766805,
      "manufacturer": "OHara-Group",
      "itemType": "mug",
      "productImg": "mug-400_002e1ecb8bd2.jpg"
    },
    {
      "imageCredit": {
        "artist": "Patrick Fore",
        "link": "http://www.resplashed.com/photographer/patrick_fore/"
      },
      "tags": [
        "Beach",
        "Ocean",
        "Water"
      ],
      "imageUrl": "http://www.resplashed.com/img/400_00b425ea69e0.jpg",
      "filename": "400_00b425ea69e0.jpg",
      "imageHash": "9197d084a8309c5cc1c1860063bc4dda",
      "price": 19.99,
      "name": "Rustic Beach Mug",
      "description": "totam at veritatis eligendi assumenda ex quia praesentium quibusdam ducimus",
      "slug": "Rustic-Beach-Mug",
      "added": 1481573896833,
      "manufacturer": "Sipes-Inc",
      "itemType": "mug",
      "productImg": "mug-400_00b425ea69e0.jpg"
    },
  ],

  thali:[
    
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  
    addTothali: (state, action) => {
      debugger;
      state.thali.push(action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTothali } = counterSlice.actions

export default counterSlice.reducer