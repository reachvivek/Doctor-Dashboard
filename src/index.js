import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {initialState} from "./reducer";
import reducer from "./reducer"
import {StateProvider} from "./StateProvider";

// Tech in this build
// 1. React
// 2. Firebase Firestore Realtime DB
// 3. Material UI
// 4. React Router
// 5. React Context API
// 6. Redux
// 7. Google Authentication
// 8. Axios
// 9. Pusher
// 10. MongoDB 
// 11. NodeJs
// 12. Express
// 13. Nodemon
// 14. Deploy using Vercel / Azure DevOps / Firebase

ReactDOM.render(
<React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
        <App/>
    </StateProvider>
</React.StrictMode>, document.getElementById('root'));

serviceWorker.unregister();
