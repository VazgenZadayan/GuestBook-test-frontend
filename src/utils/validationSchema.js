import * as Yup from 'yup';

const MAIN_REG_EXP = /^[A-Za-z0-9_]+$/;
const HYPERLINKS_REG_EXP =
  /(https?:\/\/|ftps?:\/\/|www\.)((?![.,?!;:()]*(\s|$))[^\s]){2,}/gim;

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Please enter a name')
    .min(3, 'Name must be more then 3 character')
    .max(60, 'Name must be less then 60 characters')
    .matches(
      MAIN_REG_EXP,
      'Name should only contain a-z, A-Z, 0-9, and underscore (_)'
    ),

  comment: Yup.string()
    .required('Please enter a comment')
    .test(
      'isHyperLinks',
      'Comment should not contain hyperlinks',
      (value) => value && !HYPERLINKS_REG_EXP.test(value)
    )
    .test(
      'isString',
      'Comment must be a string',
      (value) => value && typeof value
    )
    .test(
      'minComment',
      'Comment must be more then 2 character',
      (value) => value?.length >= 2
    )
    .test(
      'maxComment',
      'Comment must be less then 450 characters',
      (value) => value && String(value).length < 450
    )
    .matches(
      MAIN_REG_EXP,
      'Name should only contain a-z, A-Z, 0-9, and underscore (_)'
    ),
});

export default validationSchema;
