const stringToNumber = value => parseInt(value, 10);

export default formattedDate = (dateTime) => {
  const timestamp = Date.UTC(
    ...(dateTime.split("-").map((value, index) => {
      let n = stringToNumber(value);
      return index === 1 ? --n : n;
    }))
  );
  const date = new Date(timestamp);
  const options = { year: "numeric", month: "long", day: "numeric" };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}
