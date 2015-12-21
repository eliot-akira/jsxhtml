var expandChildren = function(children) {
  var buff, child, i, len;

  if (typeof children === 'string') {
    return children;
  }
  buff = '';
  for (i = 0, len = children.length; i < len; i++) {
    child = children[i];
    if (child.length === 1) {
      buff += child.pop;
    } else {
      buff += expandChildren(child);
    }
  }
  return buff;
};
var jsxhtml = function() {
  var attrs, buf, children, key,
    slice = [].slice, tag, value;
  tag = arguments[0];
  attrs = arguments[1];
  children = 3 <= arguments.length ? slice.call(arguments, 2) : [];

  buf = "<" + tag;
  if ((attrs != null) && typeof attrs === 'object') {
    for (key in attrs) {
      value = attrs[key];
      buf += " " + key + "=\"" + value + "\"";
    }
  }
  if ((children == null) || children.length === 0) {
    buf += ' />';
    return buf;
  } else {
    buf += '>';
    buf += expandChildren(children);
    buf += "</" + tag + ">";
  }
  return buf;
};
global.jsxhtml = module.exports = jsxhtml;
