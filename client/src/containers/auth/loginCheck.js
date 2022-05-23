import store from "../../redux/store";
import { USERLOAING_REQUEST } from "../../redux/types";

const loginCheck = () => {
  try {
    store.dispatch({
      type: USERLOAING_REQUEST,
      payload: localStorage.getItem("token"),
    });
  } catch (e) {
    console.log(e);
  }
};

export default loginCheck;
