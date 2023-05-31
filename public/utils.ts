export const COLORS: object = {
    main: "#B3C6FF",
}

// convert String to Date
export function convertStringToDate(dateString: string): Date {
    const date = new Date(dateString);
    return date;
}

// Format Date to be MM - DD
export function formatDateMMDD(date: Date): string {
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const monthIndex = date.getMonth();
    const month = monthNames[monthIndex];
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${month} ${day}`;

    return formattedDate;
}
