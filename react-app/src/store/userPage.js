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
        formData.append("backgroundImgId", backgroundImgId)
        formData.append("pageLayoutId", pageLayoutId)
        formData.append("colorPaletteId", colorPaletteId)
        formData.append("userId", userId)
        formData.append("pageName", pageName)
        formData.append("partnerOne", partnerOne)
        formData.append("partnerTwo", partnerTwo)
        if (weddingDateTime) {
            formData.append("weddingDateTime", weddingDateTime)
        }
        formData.append("venueName", venueName)
        formData.append("venueAddress", venueAddress)
        formData.append("venueCity", venueCity)
        formData.append("venueState", venueState)
        formData.append("venueZip", venueZip)
        formData.append("latitude", latitude)
        formData.append("longitude", longitude)
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
