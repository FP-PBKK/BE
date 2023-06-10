export const getDateRange = (date: string) => {
    const start_date = new Date(date);
    const end_date = new Date(date);
    start_date.setHours(0, 0, 0, 0);
    end_date.setHours(23, 59, 59, 999);
    return {start_date, end_date};
}