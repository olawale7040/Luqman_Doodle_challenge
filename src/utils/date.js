export const standardDateFormat = (date) => {
  const convertDate = new Date(date);
  const day = convertDate.getDate();
  const month = convertDate.getMonth() + 1;
  const year = convertDate.getFullYear();
  const hours = convertDate.getHours();
  const minutes = convertDate.getHours();
  const seconds = convertDate.getSeconds();

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};
