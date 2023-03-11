import React from 'react';

const AssertsValueContext = React.createContext();

export function reducer(state, action) {
    switch (action.type) {
      case 'add':
        console.log('old value: ');
        console.log(state.list);
        console.log( 'value to add: ');  
        console.log(action.assertValue);  
        state.list.push(action.assertValue);
        console.log( 'updated value: ');  
        console.log(state.list);
        return state;
      default:
        throw new Error();
    }
}


export default AssertsValueContext;