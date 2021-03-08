import {applyMiddleware, createStore, Store} from 'redux'
import rootReducer from '../reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

const middleWare = [thunk]

const RootStore = () => {
    const store: Store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(...middleWare))
    );
    return store
} 
export default RootStore;