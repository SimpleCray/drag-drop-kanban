import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import Kanban from './components/Kanban';
import store, { persistor } from './redux/store';
import { themeMaterial } from './theme';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={themeMaterial}>
                    <Kanban />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
