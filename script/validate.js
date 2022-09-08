const validation = new JustValidate('#contacts-form');

validation.addField('#name', [
  {
    rule: 'required',
    errorMessage: 'Введите имя'
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Должно быть минимум 3 символа'
  }
]);
// .addField('#tel', [
//   {
//     rule: 'required',
//     errorMessage: 'Введите номер телефона'
//   },
//   {
//     rule: 'tel',
//     errorMessage: 'Недопустимый формат'
//   }
// ]);
