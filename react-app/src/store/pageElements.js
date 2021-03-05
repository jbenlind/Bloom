const SET_PAGE_ELEMENTS = "pageElements/SET_PAGE_ELEMENTS"

export const setPageElements = (elements) => {
    return {
        type:SET_PAGE_ELEMENTS,
        elements
    }
}

export const getTemplatePageElements = () => async (dispatch) => {
    const res = await fetch("/api/page-elements")
    const response = await res.json()
    dispatch(setPageElements(response))
    return response;
}

const initialState = {
    backgroundImages: [],
    colorPalettes: [],
    pageLayouts: []
  };

const pageElementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE_ELEMENTS:
            const {background_images, color_palettes, page_layouts} = action.elements
            const pageElements = {
                ...state,
                backgroundImages: background_images,
                colorPalettes: color_palettes,
                pageLayouts: page_layouts
            }
            return pageElements
        default:
            return state;
    }
}

export default pageElementsReducer;
