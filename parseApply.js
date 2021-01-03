//Проверяет является ли выражение приложением. Если да, то она выполняет синтаксический анализ списка аргументов в скобках

const { parseExpression } = require("./parseExpression.js");
const { skipSpace } = require("./skipSpace.js");

const parseApply = (expr, program) => {
  program = skipSpace(program);
  if (program[0] != "(") {
    return { expr: expr, rest: program };
  }

  program = skipSpace(program.slice(1));
  expr = { type: "apply", operator: expr, args: [] };
  while (program[0] != ")") {
    let arg = parseExpression(program);
    expr.args.push(arg.expr);
    program = skipSpace(arg.rest);
    if (program[0] == ",") {
      program = skipSpace(program.slice(1));
    } else if (program[0] != ")") {
      throw new SyntaxError("Ожидается ',' или ')'");
    }
  }
  return parseApply(expr, program.slice(1));
};

module.exports = { parseApply };
