const expressions = {
  user: /^[a-zA-Z0-9_\-/]{4-16}/,
  name: /^[a-z-A-ZÀ-ÿ\s]{1,40}$/,
  password: /^.{4,12}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-0-]+\.[a-z-A-Z0-9-.]+$/,
  phone: /^\d{7,14}$/,
  price: /^\d+[.\d{1,2}]?/,
};

module.exports = expressions;
// export default { expressions };
