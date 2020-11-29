export default function cartItemsReducer(state, {type, item, qty}){

    const existingItem = state[item.id];

    switch (type) {
        case 'addItem':
            if(existingItem){
                return {
                    ...state,
                    [item.id]: {
                        ...existingItem,
                        qty: existingItem.qty + qty
                    }
                }
            }
            // item is new in cart
            return {
                ...state,
                [item.id]: {
                    ...item,
                    qty
                }
            }

        case 'removeItem':
            if(!existingItem) return state;

            const _qty = existingItem.qty;

            if(_qty > 1){
                return {
                    ...state,
                    [item.id]: {
                        ...existingItem,
                        qty: _qty - 1
                    }
                }
            }
            // delete item and qty if just 1 qty left
            const stateCopy = { ...state };
            delete stateCopy[item.id];
            return stateCopy;

    
        default:
            throw new Error('type not provided in cartItemsReducer, recieved instead: ' + type);
    }
}