export const generateUserId = () => {
    return 'USR' + Math.floor(1000 + Math.random() * 9000);
}

export const generateRoleId = () => {
    return 'RL' + Math.floor(1000 + Math.random() * 9000);
}