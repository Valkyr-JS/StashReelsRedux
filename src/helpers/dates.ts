/** Returns the name of a month based on a number input, where 1 = January.
 * Because enums suck. */
export const getMonthFromNumber = (num: number) => {
  const index = num - 1;
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
  ] as const;

  if (months[index]) return months[index];
};
