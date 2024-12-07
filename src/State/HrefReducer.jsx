export const initialHref = {
    href: "#home"
};

export const hrefReducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_HREF":
            return { ...state, href: action.payload };
        default:
            return state;      
    }
};