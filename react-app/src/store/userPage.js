const SET_USER_PAGE = "userPage/SET_NEW_USER_PAGE";
const SET_SELECTED_PAGE = "userPage/SET_SELECTED_PAGE"

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

export const getUserPageById = (userId) => async (dispatch) => {
    const response = await fetch(`/api/user-page/${userId}`)
    const userPage = await response.json()
    dispatch(setSelectedPage(userPage))
    return userPage;
}

export const createUserPage =
    ({backgroundImgId,  pageLayoutId, colorPaletteId, userId, pageName, partnerOne,
    partnerTwo, weddingDateTime, venueName, venueAddress, venueCity, venueState,
    venueZip, latitude, longitude, profileImg}) =>
    async (dispatch) => {
        const formData = new FormData()
        if(backgroundImgId) {
            formData.append("backgroundImgId", backgroundImgId)
        }
        if(pageLayoutId) {
            formData.append("pageLayoutId", pageLayoutId)
        }
        if(colorPaletteId) {
            formData.append("colorPaletteId", colorPaletteId)
        }
        if(userId) {
            formData.append("userId", userId)
        }
        if(pageName) {
            formData.append("pageName", pageName)
        }
        if(partnerOne) {
            formData.append("partnerOne", partnerOne)
        }
        if(partnerTwo) {
            formData.append("partnerTwo", partnerTwo)
        }
        if(weddingDateTime) {
            formData.append("weddingDateTime", weddingDateTime)
        }
        if(venueName) {
            formData.append("venueName", venueName)
        }
        if(venueAddress) {
            formData.append("venueAddress", venueAddress)
        }
        if(venueCity) {
            formData.append("venueCity", venueCity)
        }
        if(venueState) {
            formData.append("venueState", venueState)
        }
        if(venueZip) {
            formData.append("venueZip", venueZip)
        }
        if(latitude) {
            formData.append("latitude", latitude)
        }
        if(longitude) {
            formData.append("longitude", longitude)
        }
        if(profileImg) {
            formData.append("profileImg", profileImg)
        }

        const response = await fetch('/api/user-page/', {
            method: "POST",
            body: formData,
          });
        const userPage = await response.json();
        dispatch(setUserPage(userPage));
        return userPage;

}

const initialState = {}

// removed curly braces

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
        default:
            return state
    }
}

export default userPageReducer;
