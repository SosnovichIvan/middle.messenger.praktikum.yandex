const simpleUser = {
    id: "test-id-1",
    name: "Ivan",
    surname: 'Vladilenov',
    age: '24'
}

export const getSimpleUser = (data) => {
    return {...simpleUser, ...data}
}
