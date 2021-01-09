export const todoAdd = (payload: any) => {
    return {
        type: 'ADD',
        payload
    }
}

export const todoDelete = (payload: any) => {
    return {
        type: 'DELETE',
        payload
    }
}

export const todoDone = (payload: any) => {
    return {
        type: 'DONE',
        payload
    }
}