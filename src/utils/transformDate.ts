const transformDateToYearMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return `${year}年-${month}月`;
};

export { transformDateToYearMonth };
