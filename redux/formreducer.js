import { SET_PLACE_LIST} from "./constant"



export const productData = (data = {}, action) => {
    console.warn("in product reducer",data,action.type)
    switch (action.type) {
            case SET_PLACE_LIST:
                console.warn("PRODUCT_LIST condition ", action)
                console.warn("i am ",action.data.data[0])
                return action.data
        default:
            return data
    }
}
