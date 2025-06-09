import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import DatePicker, { CalendarContainer } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import css from './BookingForm.module.css';
import Heading from '../Heading/Heading';
import MyTextInput from '../MyTextInput/MyTextInput';
import Description from '../Description/Description';
import Button from '../Button/Button';
import { forwardRef } from 'react';

//  контейнер

// инпут
const ExampleCustomInput = forwardRef(({ value, onClick, className }, ref) => (
  <button className={css.dateTextInput} onClick={onClick} ref={ref}>
    {value}
  </button>
));

// day

// головний компонент
const MyDatePicker = ({ name = '' }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  function handleDayClassName(date) {
    if (date.getDay() === 0) {
      return 'sunday'; // Add a class for Sundays
    } else if (date.getDay() === 6) {
      return 'saturday'; // Add a class for Saturdays
    }
    return '';
  }

  return (
    <div className={css.inputWrap}>
      <DatePicker
        placeholderText="Booking date *"
        dateFormat="dd/MM/yyyy"
        {...field}
        selected={value}
        onChange={date => setValue(date)}
        calendarClassName={css.calendar}
        className={css.dateTextInput}
        dayClassName={handleDayClassName}
      />
    </div>
  );
};

export default function BookingForm() {
  function handleSubmit(values, actions) {
    console.log(values);
    alert(JSON.stringify(values.bookingDate));
    actions.resetForm();
  }
  const BookingSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required(),
    email: Yup.string().email('Invalid email address').required(),
    bookingDate: Yup.string(),
    comment: Yup.string(),
  });

  const defaultFormValues = {
    name: '',
    email: '',
    bookingDate: new Date(),
    comment: '',
  };

  return (
    <div className={css.formWrap}>
      <div>
        <Heading tag="h3" variant="">
          Book your campervan now
        </Heading>
        <Description variant="form">
          Stay connected! We are always ready to help you.
        </Description>
      </div>
      <Formik
        initialValues={defaultFormValues}
        onSubmit={handleSubmit}
        validationSchema={BookingSchema}
      >
        {props => (
          <Form className={css.bookingForm} id="bookingForm">
            <MyTextInput name="name" type="text" placeholder="Name *" />
            <MyTextInput name="email" type="email" placeholder="Email *" />
            <MyDatePicker
              name="bookingDate"
              type="date"
              variant="date"
            />
            <MyTextInput
              tag="textarea"
              name="comment"
              placeholder="Comment "
              variant="textarea"
            />
            <div className={css.btnWrap}>
              <Button
                handleSubmit={handleSubmit}
                form="bookingForm"
                btnType="submit"
                variant="filled"
                text="Send"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
