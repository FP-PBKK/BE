const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = date.getDate();
    return `${year}${month}${day}`;
};

export const generateUserId = () => {
    return 'USR' + Math.floor(1000 + Math.random() * 9000);
}

export const generateRoleId = () => {
    return 'RL' + Math.floor(1000 + Math.random() * 9000);
}

export const generateBookingId = () => {
    return 'BOK' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
}