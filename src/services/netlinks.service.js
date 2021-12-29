export const netLinksService = {
    createUser,
    defaultUsers
}

var gId = 103;

function createUser(userName) {
    gId++;
    return {
        id: `p+${gId}`,
        name: userName,
        films: ['Scarface', 'Joker', 'A Clock Orange'],
        img: 'user1.jpeg'
    }
}

function defaultUsers() {
    return [{ id: 'p101', name: 'David Smith', films: ['Scarface', 'Joker', 'A Clock Orange'], img: 'user1.jpeg' },
    { id: 'p102', name: 'Andrea Johnson', films: ['The 400 Blows', 'Amour', 'Bicycle Thieves'], img: 'user2.jpeg' },
    { id: 'p103', name: 'Lin Williams', films: ['E.T the extra terrestrial', 'Fargo', '12 Angry Men'], img: 'user3.jpeg' }]
}