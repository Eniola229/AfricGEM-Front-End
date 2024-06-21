export function isEven(index) {
  return index % 2 === 0;
}
export const validateURL = (href) => /^https?:\/\//.test(href);

export const getMonth = function (index) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[index];
};
