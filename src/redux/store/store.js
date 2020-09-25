import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer, createTransform } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import JSOG from 'jsog';


export const JSOGTransform = createTransform(
    (inboundState, key) => JSOG.encode(inboundState),
    (outboundState, key) => JSOG.decode(outboundState),
)

const persistConfig = {
    key: 'root',
    storage,
    transforms: [JSOGTransform]
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)



const initialState = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store =  createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(thunk)))
export const persistor = persistStore(store);
// export const dispatch = store.dispatch