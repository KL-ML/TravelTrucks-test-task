import css from './MyDatePicker.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useField } from 'formik';

export default function MyDatePicker({ name = '' }) {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <div className={css.inputWrap}>
      <DatePicker
        placeholderText="Booking date *"
        dateFormat="dd/MM/yyyy"
        {...field}
        selected={value}
        onChange={date => setValue(date)}
        className={css.dateTextInput}
      />
    </div>
  );
}
