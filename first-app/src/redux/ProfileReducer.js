const ADD_POST = 'ADD_POST';

const initialState = {
  posts: [
    { id: "1", theme: "First post", text: "Begin React learning 30.05.2022" },
    { id: "2", theme: "Second post", text: "Use the first props 01.06.2022" },
    { id: "3", theme: "Third post", text: "create state.js and move data 02.06.2022" },
    { id: "4", theme: "Fourth post", text: "add dispatch/reducer 03.06.2022" },
    { id: "5", theme: "Fifth post", text: "add react-redux 07.06.2022" },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({id: '4', theme: action.theme, text: action.text});
      return state;
    default:
      return state;
  }
}

export default profileReducer;