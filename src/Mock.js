export const items = [
    {
        id: '1',
        title: 'Item 1',
        text: 'Description'
    },
    {
        id: '2',
        title: 'Item 2',
        text: 'Description'
    }
]

export const getItems =  () => {
    return new Promise((resolve)  => {
        setTimeout(()  => {
            resolve(items)
        }, 200)
    })
    
}

