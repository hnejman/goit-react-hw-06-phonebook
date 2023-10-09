export const filtersReducer = (state, action) => {
    switch (action.type){
        case "contacts/filter": {
            return  action.payload;
        }
        default : {return "";}
    }
};