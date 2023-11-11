import {SET_HOTEL_LIST} from "./constant"

export const hotelData = (data = {}, action) => {
    console.warn("in hotel reducer",data,action.type)
    switch (action.type) {
            case SET_HOTEL_LIST:
                console.warn("Hotel_LIST condition ", action)
                console.warn("i am ",action.data)
                return action.data
        default:
            return data
    }
}