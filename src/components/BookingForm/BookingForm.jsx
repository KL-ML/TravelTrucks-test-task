import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css';
import Heading from '../Heading/Heading';
import MyTextInput from '../MyTextInput/MyTextInput';
import Description from '../Description/Description';
import Button from '../Button/Button';
import MyDatePicker from '../MyDatePicker/MyDatePicker';
import toast, { Toaster } from 'react-hot-toast';

export default function BookingForm() {
  function handleSubmit(values, actions) {
    console.log(values);
    toast(
      `Dear ${values.name}! Your order was successful!. You will receive a booking confirmation via email ${values.email} shortly.`
    );
    actions.resetForm();
  }
  const BookingSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required(),
    email: Yup.string().email('Invalid email address').required(),
    bookingDate: Yup.date('Invalid date format').required(),
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
        <Form className={css.bookingForm} id="bookingForm">
          <MyTextInput name="name" type="text" placeholder="Name *" />
          <MyTextInput name="email" type="email" placeholder="Email *" />
          <MyDatePicker name="bookingDate" type="date" variant="date" />
          <MyTextInput
            tag="textarea"
            name="comment"
            placeholder="Comment "
            variant="textarea"
          />
          <div className={css.btnWrap}>
            <Button
              handleSubmit={handleSubmit}
              // form="bookingForm"
              btnType="submit"
              variant="filled"
              text="Send"
            />
          </div>
        </Form>
      </Formik>
      <Toaster
        containerClassName={css.toaster}
        toastOptions={{
          className: css.bookingToast,
          removeDelay: 2000,
        }}
      />
    </div>
  );
}
