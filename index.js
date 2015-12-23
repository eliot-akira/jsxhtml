
var expandAttributes, expandChildren, expandClass;

var jsxhtml = function() {

  // JSX transform function signature: tag, attrs, child[, child...]

  var tag = arguments[0];
  var attrs = arguments[1];
  var children = 3 <= arguments.length ? [].slice.call(arguments, 2) : [];

  var buf, child, value;

  if (typeof tag === 'function') {
    return expandClass( tag, atts, children );
  }

  buf = "<" + tag;
  buf += expandAttributes( attrs );

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

expandAttributes = function( attrs ) {
  var buf = '';

  if ((attrs != null) && typeof attrs === 'object') {
    for (var key in attrs) {
      value = attrs[key];
      buf += " " + key + "=\"" + value + "\"";
    }
  }
  return buf;
}

expandChildren = function(children) {

  if (typeof children === 'string') return children;

  var buff = '',
      child, i, len;

  // Array of objects or strings
  for (i = 0, len = children.length; i < len; i++) {
    child = children[i];
    if (child instanceof Array && child.length === 1) {
      buff += child.pop;
    } else {
      buff += expandChildren(child);
    }
  }
  return buff;
};

expandClass = function( tag, attrs, children ) {

  // TODO: How to handle <Component />

  child = new tag( attrs, children );
  return child.outerHTML;
}

// Inline JSX is transformed to jsxhtml function calls,
// so it needs to be globally available

global.jsxhtml = jsxhtml;
