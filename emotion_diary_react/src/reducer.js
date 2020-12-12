import { combineReducers } from 'redux';
import { hashById } from './components/calendar/utils';

export default combineReducers({
  loginlogin,
  weekendsVisible,
  eventsById,
});
const LOGIN = 'LOGIN';
export const login = () => ({ type: LOGIN });

const LOGOUT = 'LOGOUT';
export const logout = () => ({ type: LOGOUT });

const initstate = {
  lsLogin: false,
};

function loginlogin(state = initstate, action) {
  console.log('store에서 찍힘 ' + action);
  switch (action.type) {
    case LOGIN:
      return { isLogin: true };
    case LOGOUT:
      return { isLogin: false };
    default:
      return state;
  }
}
function weekendsVisible(weekendsVisible = true, action) {
  switch (action.type) {
    case 'TOGGLE_WEEKENDS':
      return !weekendsVisible;

    default:
      return weekendsVisible;
  }
}

function eventsById(eventsById = {}, action) {
  switch (action.type) {
    case 'RECEIVE_EVENTS':
      return hashById(action.plainEventObjects);

    case 'CREATE_EVENT':
    case 'UPDATE_EVENT':
      return {
        ...eventsById,
        [action.plainEventObject.id]: action.plainEventObject,
      };

    case 'DELETE_EVENT':
      eventsById = { ...eventsById }; // copy
      delete eventsById[action.eventId];
      return eventsById;

    default:
      return eventsById;
  }
}
