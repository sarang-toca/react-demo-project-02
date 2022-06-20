import { createStore, applyMiddleware, compose } from "redux";
// import persistState from "redux-localstorage";
import rootReducer from "reducers/rootReducer";
import thunk from "redux-thunk";
const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 100,
    })) ||
  compose;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk), 
    // persistState("auth")
    )
  );
  return store;
}
