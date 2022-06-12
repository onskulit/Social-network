const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const ADD_USERS = 'ADD_USERS';
const ADD_PAGE = 'ADD_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
  users: [],
  pageSize: 3,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map( user => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          }
          return user;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( user => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          }
          return user;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      }
    case ADD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      }
    case ADD_PAGE:
      return {
        ...state,
        currentPage: ++{...state}.currentPage,
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    default:
      return state;
  }
}

export const follow = (userId) => ({ type: FOLLOW, userId }); //AC - action creator
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const addUsers = (users) => ({ type: ADD_USERS, users });
export const addPage = () => ({ type: ADD_PAGE });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });

export default usersReducer;

/* {id: '1', isFollowed: true, fullName: 'Dmitriy L', status: 'learning React', location: {country: 'Belarus', city: 'Minsk'}, img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/865d2d0e-bac6-4a78-a0ed-17a87b285069/280x420'},
    {id: '2', isFollowed: false, fullName: 'Dmitriy L', status: 'learning JS', location: {country: 'Russia', city: 'Moscow'}, img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/865d2d0e-bac6-4a78-a0ed-17a87b285069/280x420'}, */