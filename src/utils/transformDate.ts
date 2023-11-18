const transformDateToYearMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return `${year}年-${month}月`;
};

const weekMap: Record<string, string> = {
    1: '星期一',
    2: '星期二',
    3: '星期三',
    4: '星期四',
    5: '星期五',
    6: '星期六',
    0: '星期日',
};

const getWeekDay = () => {
    const week = String(new Date().getDay());
    return weekMap[week];
};

export { transformDateToYearMonth, getWeekDay };
