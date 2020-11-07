import { ADD_TRANSACTION , DELETE_TRANSACTION } from "../Actions/types";

const initialState = {
    transactions : [
        {id:1, title : 'Soup' , price: -20},
        {id:2, title : 'Drink' , price: -40},
        {id:3, title : 'PayPal' , price: 400},
        {id:4, title : 'Bank' , price: 2000},
        {id:5, title : 'Tikka' , price: -150},
        {id:6, title : 'Petrol' , price: -100},
        {id:7, title : 'Lunch' , price: -150},
    ],
};

export default function transactionReducer(state = initialState, { type , payload }) {
  switch (type) {
   
    default:
      return state
  }
};