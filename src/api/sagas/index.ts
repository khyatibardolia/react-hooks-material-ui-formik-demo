import { all } from "redux-saga/effects";

import UserSaga from './sagas';

/*combine all sagas in root saga*/
export default function* rootSaga() {
    yield all([
        UserSaga()
    ]);
}
