const { parseExpression } = require("./parseExpression.js");
const { skipSpace } = require("./skipSpace.js");

function parse(program) {
  var result = parseExpression(program);
  if (skipSpace(result.rest).length > 0)
    throw new SyntaxError("Неожиданный текст после программы");
  return result.expr;
}

module.exports = { parse };
console.log(parse("+(a, 10)"));
