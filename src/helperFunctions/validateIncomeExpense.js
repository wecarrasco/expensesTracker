import { cond, equals, compose, always } from 'ramda';

const validate = (expense) => {
  return compose(
    isNameOK,
    isAmountOK
  )(expense);
};

const isAmountOK = (expense) => {
  return { valid: !equals(expense.amount, 0), expense };
};

const isNameOK = ({ valid, expense }) => {
  console.log(expense);
  const validName = cond([
    [
      equals(false),
      always({
        valid,
        expense,
        error: "The amount of your expense can't be 0"
      })
    ],
    [
      equals(true),
      always({
        valid: !equals(expense.name, ''),
        expense,
        error: "The name cant't be empty"
      })
    ]
  ]);
  return validName(valid);
};

export default validate;
