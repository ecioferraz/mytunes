const MAX_LENGTH = 25;

const shortenName = (name: string) => {
  return name.length < MAX_LENGTH
    ? name
    : name.slice(0, MAX_LENGTH).concat('...');
};

export default shortenName;
