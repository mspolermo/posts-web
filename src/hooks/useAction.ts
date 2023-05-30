import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import AllActionsCreators from '../store/action-creators/index'


export const useActions = () => {
   const dispatch = useDispatch();
   return bindActionCreators( AllActionsCreators, dispatch);
}