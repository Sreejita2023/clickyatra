import { takeEvery, put } from 'redux-saga/effects'
import { SEARCH_VALUE,SET_PLACE_LIST,SET_HOTEL_LIST,HOTEL_VALUE} from './constant';


function* searchPlaces(data) {
    console.warn("we get intohere",data.query.place)
    const url = `https://travel-advisor.p.rapidapi.com/locations/auto-complete?query=${data.query.place}&lang=en_US&units=km`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '395f668d84msh49c4b4f88b5528cp180c9djsn1bcacdd4b727',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
       };
    let result = yield fetch(url,options);
    result = yield result.json();
    console.warn("action is called", result)
    yield put({type: SET_PLACE_LIST,data:result})
}

function* searchHotels(data) {
    console.warn("we get intohere bby",data.query.place)
    const url = `https://hotels-com-provider.p.rapidapi.com/v2/regions?query=${data.query.place}&domain=IN&locale=en_IN`;
        console.warn(url)
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '395f668d84msh49c4b4f88b5528cp180c9djsn1bcacdd4b727',
                    'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
                }
            };
    let result = yield fetch(url,options);
    result = yield result.json();
    let placeid=result.data[0].gaiaId
    console.warn("hi",placeid)
    const url2 = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?region_id=${placeid}&locale=en_IN&checkin_date=${data.query.checkin}&sort_order=REVIEW&adults_number=7&domain=IN&checkout_date=${data.query.checkout}&children_ages=4%2C0%2C15&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&price_min=10&star_rating_ids=3%2C4%2C5&meal_plan=FREE_BREAKFAST&page_number=1&price_max=500&amenities=WIFI%2CPARKING&payment_type=PAY_LATER%2CFREE_CANCELLATION&guest_rating_min=8&available_filter=SHOW_AVAILABLE_ONLY`;
        const options2 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '395f668d84msh49c4b4f88b5528cp180c9djsn1bcacdd4b727',
                'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
            }
        };

        let result2 = yield fetch(url2,options2);
        result2 = yield result.json();
    yield put({type: SET_HOTEL_LIST,data:result2})
}

function* productSaga() {

    yield takeEvery(SEARCH_VALUE, searchPlaces),
    yield takeEvery(HOTEL_VALUE, searchHotels)

}

export default productSaga;