import Geocode from "react-geocode";

const SET_USER_PAGE = "userPage/SET_NEW_USER_PAGE";
const SET_SELECTED_PAGE = "userPage/SET_SELECTED_PAGE";
const SET_ALL_PAGES = "userPage/SET_ALL_PAGES";

export const setUserPage = (payload) => {
    return {
      type: SET_USER_PAGE,
      payload
    }
};

export const setSelectedPage = (payload) => {
    return {
        type: SET_SELECTED_PAGE,
        payload
    }
}

export const setAllPages = (payload) => {
  return {
    type: SET_ALL_PAGES,
    payload
  }
}

export const findAllPages = (setPages) => async (dispatch) => {
  const response = await fetch("/api/user-page/all");
  const pages = await response.json()
  dispatch(setAllPages(pages))
  setPages(pages)
  return pages;
}

export const getUserPageById = (userId) => async (dispatch) => {
    const response = await fetch(`/api/user-page/${userId}`)
    const userPage = await response.json()
    dispatch(setSelectedPage(userPage))
    return userPage;
}

export const createUserPage =
    ({backgroundImgId, pageLayoutId, colorPaletteId, userId, pageName, partnerOne,
    partnerTwo, weddingDateTime, venueName, venueAddress, venueCity, venueState,
    venueZip, profileImg}) =>
    async (dispatch) => {
        Geocode.setApiKey("AIzaSyAhUv7D1k_1HGN2tm-Im677gbBTetI64lo");
        Geocode.setLanguage("en");
        Geocode.setLocationType("ROOFTOP");
        const getLat = (venueAddress, venueCity, venueState, venueZip) => {
            return Geocode.fromAddress(`${venueAddress} ${venueCity}, ${venueState} ${venueZip}`).then(
              (response) => {
                const { lat } = response.results[0].geometry.location;
                return lat;
              },
              (error) => {
                return 0;
              }
            );
        }
        const getLng = (venueAddress, venueCity, venueState, venueZip) => {
            return Geocode.fromAddress(`${venueAddress} ${venueCity}, ${venueState} ${venueZip}`).then(
              (response) => {
                const { lng } = response.results[0].geometry.location;
                return lng;
              },
              (error) => {
                return 0;
              }
            );
        };

        const formData = new FormData()
        formData.append("backgroundImgId", backgroundImgId)
        formData.append("pageLayoutId", pageLayoutId)
        formData.append("colorPaletteId", colorPaletteId)
        formData.append("userId", userId)
        formData.append("pageName", pageName)
        formData.append("partnerOne", partnerOne)
        formData.append("partnerTwo", partnerTwo)
        if(weddingDateTime) {
            formData.append("weddingDateTime", weddingDateTime)
        }
        formData.append("venueName", venueName)
        formData.append("venueAddress", venueAddress)
        formData.append("venueCity", venueCity)
        formData.append("venueState", venueState)
        formData.append("venueZip", venueZip)
        if(venueAddress && venueCity && venueState && venueZip) {
            formData.append("latitude", await getLat(venueName, venueAddress, venueCity, venueState))
            formData.append("longitude", await getLng(venueName, venueAddress, venueCity, venueState))
        }
        formData.append("profileImg", profileImg)


        const response = await fetch('/api/user-page/', {
            method: "POST",
            body: formData,
          });
        const userPage = await response.json();
        dispatch(setUserPage(userPage));
        return userPage;

}

const initialState = {}

const userPageReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_USER_PAGE:
            const userPage = action.payload
            const userPageElements = {...state, ...userPage }
            return userPageElements
        case SET_SELECTED_PAGE:
            const userPageContent = action.payload
            const userPageFields = {...state, ...userPageContent}
            return userPageFields;
        case SET_ALL_PAGES:
          const pages = action.payload
          const allPages = {...state, ...pages}
          return allPages;
        default:
            return state
    }
}

export default userPageReducer;
