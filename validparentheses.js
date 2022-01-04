function validParentheses(parens) {
  const open = ["("];
  const closed = [")"];
  const stack = [];

  for (let i = 0; i < parens.length; i += 1) {
    if (open.includes(parens[i])) {
      stack.push(parens[i]);
    } else {
      if (closed.indexOf(parens[i]) === open.indexOf(stack[stack.length - 1])) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function validParentheses(parens) {
  return [...parens].reduce((a, c) => (a + c).replace("()", "")) == ""
    ? true
    : false;
}

function validParentheses(parens) {
  let indent = 0;

  for (let i = 0; i < parens.length && indent >= 0; i++) {
    indent += parens[i] == "(" ? 1 : -1;
  }

  return indent == 0;
}
