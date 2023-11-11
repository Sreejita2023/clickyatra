import {combineReducers} from 'redux'
import {productData} from './formreducer'
import { hotelData } from './hotelreducer'
console.warn("it is called")
export default combineReducers({
    productData,
    hotelData,
})