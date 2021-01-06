//Удаляет пробелы в начале каждой строки
function skipSpace(string) {
  var first = string.search(/\S/);
  if (first == -1) return "";
  return string.slice(first);
}

module.exports = { skipSpace };
