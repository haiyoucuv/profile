import { makeAutoObservable, } from 'mobx';

class Store {

}

const store: Store = makeAutoObservable(new Store());

export default store;
