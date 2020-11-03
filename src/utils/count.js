export default formattedCount = (count) => {
  const formatter = new Intl.NumberFormat("en-US");

  return formatter.format(count);
};
