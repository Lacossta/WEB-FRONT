export const convertTime = (value) => {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('ru-RU', { dateStyle: 'short' });
    date.setTime(value);
    const formattedDate = formatter.format(date);
    return formattedDate
}