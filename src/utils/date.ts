export const getDateDiff = (d1: Date, d2: Date) => {
  var t2 = d2.getTime();
  var t1 = d1.getTime();

  return parseInt(((t2 - t1) / (24 * 3600 * 1000)) as any);
};

export const daysToMessage = (days: number) => {
  if (days === 0) return "Today";
  if (days === 1) return days + " day";
  if (days < 7) {
    return days + " days";
  }

  const [weeks, remainDays] = (days / 7 + "").split(".");

  return `${weeks} week(s) ${remainDays.charAt(0)} day(s)`;
};
