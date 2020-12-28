import { all } from "redux-saga/effects";

import PaginationSaga from './api';

/*combine all sagas in root saga*/
export default function* rootSaga() {
    yield all([
        PaginationSaga()
    ]);
}
