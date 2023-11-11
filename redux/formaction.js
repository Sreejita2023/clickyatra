
import {SEARCH_VALUE,HOTEL_VALUE} from "./constant"

export const searchValue = (query) => {
    console.warn(query)
    return {
        type: SEARCH_VALUE,
        query
    }
}
export const hotelValue = (query) => {
    console.warn(query)
    return {
        type: HOTEL_VALUE,
        query
    }
}



