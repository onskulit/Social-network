const ADD_POST = 'ADD_POST';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({id: '4', theme: action.theme, text: action.text});
      return state;
    default:
      return state;
  }
} 

export default profileReducer;