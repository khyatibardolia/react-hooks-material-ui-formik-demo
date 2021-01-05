import { all } from "redux-saga/effects";

import UserSaga from './api';

/*combine all sagas in root saga*/
export default function* rootSaga() {
    yield all([
        UserSaga()
    ]);
}
