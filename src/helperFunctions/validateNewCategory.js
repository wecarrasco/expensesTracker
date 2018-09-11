import { compose, cond, equals, always, contains } from 'ramda';

const validate = ({ category, categories }) => {
  return compose(
    exists,
    isNameOK
  )({ category, categories });
};

const isNameOK = ({ category, categories }) => {
  return { valid: !equals(category, ''), category, categories };
};

const exists = ({ valid, category, categories }) => {
  const existsCategory = cond([
    [
      equals(false),
      always({ valid, category, error: "The category can't be empty" })
    ],
    [
      equals(true),
      always({
        valid: !contains({ name: category }, categories),
        category,
        error: 'The category already exists'
      })
    ]
  ]);

  return existsCategory(valid);
};

export default validate;
