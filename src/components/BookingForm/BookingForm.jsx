import { Form, Formik } from 'formik';
import css from './BookingForm.module.css';
import Heading from '../Heading/Heading';
import MyTextInput from '../MyTextInput/MyTextInput';
import Description from '../Description/Description';
import Button from '../Button/Button';

export default function BookingForm() {
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
        initialValues={{
          name: '',
          email: '',
          bookingDate: '',
          comment: '',
        }}
      >
        <Form className={css.bookingForm} id="bookingForm">
          <MyTextInput name="name" type="text" placeholder="Name *" />
          <MyTextInput name="email" type="email" placeholder="Email *" />
          <MyTextInput
            name="date"
            type="text"
            placeholder="Booking date *"
            variant="date"
          />
          <MyTextInput
            tag="textarea"
            name="comment"
            placeholder="Comment "
            variant="textarea"
          />
        </Form>
      </Formik>
      <div className={css.btnWrap}>
        <Button form="bookingForm" type="submit" variant="filled" text="Send" />
      </div>
      {/* <Button form="bookingForm" type="submit" variant="filled" text="Send" /> */}
    </div>
  );
}
