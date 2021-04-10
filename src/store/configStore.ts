import { createStore, Store } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Persistor } from "redux-persist/es/types";
import rootReducer from "./reducer";
import { Theme } from "./reducer/theme";
import { IContact } from "./reducer/Contacts";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export interface IStore {
  theme: Theme;
  contacts: Array<IContact>;
}

export default (): { store: Store; persistor: Persistor } => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
