const initialState = {
  persons: [
    {name: "Dmitry", id: '1'},
    {name: "Helga", id: '2'},
    {name: "Zlata", id: '3'},
    {name: "Sanya", id: '4'},
    {name: "Egor", id: '5'},
    {name: "Artem", id: '6'},
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default dialogsReducer;