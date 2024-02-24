export function getDaysForMonth(month: any, year: any) {
  let days = null;
  const daysArray = [];
  switch (month) {
    case "April":
    case "June":
    case "September":
    case "November":
      days = 30;
      break;
    case "February":
      days = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
      break;
    default:
      days = 31;
  }

  for (let x = 1; x <= days; x++) {
    daysArray.push(x);
  }
  return daysArray;
}

export const MONTHS = [
  "January", // 31
  "February", // 28
  "March", // 31
  "April", // 30
  "May", // 31
  "June", // 30
  "July", // 31
  "August", // 31
  "September", // 30
  "October", // 31
  "November", // 30
  "December", // 31
];

export const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export function isMobile() {
  return /iPad|iPhone|Android/.test(navigator.userAgent) ?? true;
}

export function formatDate(date: number) {
  const dateObj = new Date(date);
  let day = dateObj.getDate();
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  return `${year}-${month}-${day}`;
}
