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

export const generateTransactionId = () => {
    return 'TRS' + getDate() + '0' + Math.floor(1000 + Math.random() * 9000);
}

export const generateQR = () => {
    const qrId = "QR" + Math.floor(Math.random() * 1000000000000000);
    return qrId;
}

export const generateFeedbackId = () => {
    return 'FDB' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
}

export const generateScheduleId = (time: string) => {
    const hours = time.split(':')[0];
    const minutes = time.split(':')[1];
    const scheduleId = 'SCH' + hours + minutes;
    return scheduleId;
}