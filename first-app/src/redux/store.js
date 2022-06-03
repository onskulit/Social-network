import profileReducer from "./profileReducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        {id: '1', theme: "First post", text: "Begin React learning 30.05.2022"},
        {id: '2', theme: "Second post", text: "Use the first props 01.06.2022"},
        {id: '3', theme: "Third post", text: "create state.js and move data 02.06.2022"},
        {id: '4', theme: "Fourth post", text: "add dispatch/reducer 03.06.2022"},
      ], 
    },
    persons: [
      {name: "Dmitry", id: '1'},
      {name: "Helga", id: '2'},
      {name: "Zlata", id: '3'},
      {name: "Sanya", id: '4'},
      {name: "Egor", id: '5'},
      {name: "Artem", id: '6'},
    ],
  },

  get state () {
    return this._state;
  },

  _callSubscriber() {},

  dispatch (action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._callSubscriber();
  },

  subscribe (observer) {
    this._callSubscriber = observer;
  },
}

export default store;