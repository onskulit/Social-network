const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [
    {id: '1', isFollowed: true, fullName: 'Dmitriy L', status: 'learning React', location: {country: 'Belarus', city: 'Minsk'}, img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/865d2d0e-bac6-4a78-a0ed-17a87b285069/280x420'},
    {id: '2', isFollowed: false, fullName: 'Dmitriy L', status: 'learning JS', location: {country: 'Russia', city: 'Moscow'}, img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/865d2d0e-bac6-4a78-a0ed-17a87b285069/280x420'},
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map( user => {
          if (user.id === action.userId) {
            return {...user, isFollowed: true};
          }
          return user;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( user => {
          if (user.id === action.userId) {
            return {...user, isFollowed: false};
          }
          return user;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      }
    default:
      return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId }); //AC - action creator
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;