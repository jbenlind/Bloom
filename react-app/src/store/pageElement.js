const SET_PAGE_ELEMENTS = 'pageElement/SET_PAGE_ELEMENTS'

export const setPageElements = (elements) => {
    return {
        type:SET_PAGE_ELEMENTS,
        elements
    }
}


export const getTemplatePageElements = () => async (dispatch) => {
    const response = await fetch("/api/page_elements")
    const elements = await response.json
    dispatch(setPageElements(elements))
    return elements;
}

const initialState = {
    pageElement: null,
  };

const pageElementReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE_ELEMENTS:
            return { ...state, pageElement: action.pageElements}
        default:
            return state;
    }
}

export default pageElementReducer;
