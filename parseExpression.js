//Синтаксический анализатор
const { skipSpace } = require("./skipSpace.js");
const { parseApply } = require("./parseApply.js");

const parseExpression = (program) => {
  //Удаляем пробелы в начале каждой строки
  program = skipSpace(program);

  let match, expr;
  // Проверка является ли выражение program строкой
  if ((match = /^([^"]*)"/.exec(program))) {
    expr = { type: "value", value: match[1] };
  }
  // Проверка является ли выражение program числом
  else if ((match = /^\d+\b/.exec(program))) {
    expr = { type: "value", value: Number(match[0]) };
  }
  // Проверка является ли выражение program словом
  else if ((match = /^[^\s(),#"]+/.exec(program))) {
    expr = { type: "word", name: match[0] };
  } else {
    throw new SyntaxError("Неожиданный синтаксис: " + program);
  }
  //Проверяем является ли выражение приложением
  return parseApply(expr, program.slice(match[0].length));
};

module.exports = { parseExpression };
