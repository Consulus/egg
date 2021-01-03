//Удаляет пробелы в начале каждой строки

const skipSpace = (string) => {
  let first = string.search(/\S/);
  if (first == -1) return "";
  return string.slice(first);
};

module.exports = { skipSpace };
