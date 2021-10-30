import { autorun, makeAutoObservable } from 'mobx';

class Store {
    constructor() {

        makeAutoObservable(this);
    }
}

const store = new Store();

export { store };