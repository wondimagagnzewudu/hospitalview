import { action, thunk, useStoreState } from 'easy-peasy';
const model = {

    isLoggedin: false,

    signInhandle: thunk(async (actions, payload) => {
        try {

            actions.loggin();
        } catch (error) {

        }
    }),




    signOutHandle: thunk(async (actions, payload) => {
        try {

            actions.signOut()
        } catch (error) {
            console.log(error)
        }
    }),
    loggin: action((state, payload) => {
        state.isLoggedin = '';
        state.isLoggedin = true;


    }),
    signOut: action((state, payload) => {
        state.isLoggedin = false;
    }),



};

export default model;

