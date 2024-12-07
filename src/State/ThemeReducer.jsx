export const initialState = {
    darkMode: true
};

export const themeReducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE_MODE":
            return { ...state, darkMode: !state.darkMode };
        default:
            return state;
    }
};
