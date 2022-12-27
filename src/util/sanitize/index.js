import sanitizeHtml from "sanitize-html";

const sanitize = (v) => {
  return sanitizeHtml(v, {
    allowedTags: ["span", "br"],
  });
};

export default sanitize;
