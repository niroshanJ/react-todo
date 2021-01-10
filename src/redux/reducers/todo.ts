import { v4 as uuidv4 } from 'uuid';

interface todoInterface {
    id: any,
    title: string,
    isDone: boolean,
    dateTime: Date
}

export const todoReducer = (state: todoInterface[] = [], action: any) => {
    switch (action.type) {
        case 'ADD':
            return [...state, { id: uuidv4(), title: action.payload.title, isDone: false, dateTime: new Date() }]
        case 'DELETE':
            let deleteIndex = state.findIndex((todo: any) => todo.id === action.payload);
            return [...state.slice(0, deleteIndex), ...state.slice(deleteIndex + 1)];
        case 'DONE':
            let updatedState = state.map(todo => {
                if (todo.id === action.payload)
                    return Object.assign({}, todo, { isDone: true })
                return todo;
            });
            return updatedState;
        default:
            return state;
    }
}