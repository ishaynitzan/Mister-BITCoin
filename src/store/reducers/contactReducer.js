const INITIAL_STATE = {
    contact: [],
    filterBy: null
}

export function contactReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: [...action.contacts]
            };

        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contact, action.contact]
            }

        case 'REMOVE_CONTACT':
            return {
                ...state,
                contacts: state.contact.filter(contact => contact._id !== action.contactId)
            }

        case 'UPDATE_CONTACT':
            return {
                ...state,
                CONTcontactACT: state.contact.map(contact => contact._id === action.contact._id ? action.contact : contact)
            }
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: {...action.filterBy}
            }

        default:
            return state;
    }

}