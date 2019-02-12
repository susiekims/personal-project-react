import { LOG_OUT } from '../constants';

const logOut = () => (dispatch) => dispatch({type: LOG_OUT});

export default logOut;