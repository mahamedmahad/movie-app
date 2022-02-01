
//session storage

export const isPersistedState = stateName => {
    //returns the state from sessionState
    const sessionState = sessionStorage.getItem(stateName)

    return sessionState && JSON.parse(sessionState);
}