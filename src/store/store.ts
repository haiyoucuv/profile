import { makeAutoObservable } from 'mobx';

class Store {
    constructor() {
        makeAutoObservable(this);
    }
}

export default new Store();
