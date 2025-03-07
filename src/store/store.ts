import { makeAutoObservable, } from 'mobx';
import defaultCode from "../editor/defaultCode.ts?raw";

class Store {

    constructor() {
        makeAutoObservable(this);
    }

    code = defaultCode;

    compileCode = '';
}

export default new Store();
