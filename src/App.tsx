import './App.css';
import {AppRouting} from "./router/appRouting";
import {Provider} from 'react-redux';
import {configureStore} from "./redux/store";

function App() {
    return (
        <div className={'w-100 h-100'}>
            <Provider store={configureStore()}>
            <AppRouting/>
            </Provider>
        </div>
    );
}

export default App;
