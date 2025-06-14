import css from './FiltersForm.module.css';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import iconsPath from '../../images/symbol-defs.svg';

export default function FiltersForm() {
  const dispatch = useDispatch();

  const initialValues = {
    city: '',
    equipment: [],
    type: '',
  };

  const locationFieldId = useId();
  const ACFieldId = useId();
  const bathroomFieldId = useId();
  const kitchenFieldId = useId();
  const TVFieldId = useId();
  const radioFieldId = useId();
  const refrigeratorFieldId = useId();
  const microwaveFieldId = useId();
  const gasFieldId = useId();
  const waterFieldId = useId();
  const alcoveFieldId = useId();
  const fullyIntegratedFieldId = useId();
  const panelTruckFieldId = useId();

  const handleSubmit = (
    { city, equipment, form },
    { setSubmitting, resetForm }
  ) => {
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
    }, 500);

    const location = city === '' ? null : city;

    const equipmentObject = {};
    equipment.map(item => {
      equipmentObject[item] = true;
    });

    const filterParams = { location, ...equipmentObject, form };
    dispatch(changeFilter(filterParams));
  };

  const filtersSchema = Yup.object().shape({
    city: Yup.string(),
    form: Yup.string().oneOf(['panelTruck', 'alcove', 'fullyIntegrated']),
    equipment: Yup.array(),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={filtersSchema}
      >
        {({ isSubmitting }) => (
          <Form className={css.formWrap}>
            {/* Location select */}
            <div className={css.selectWrap}>
              <label className={css.selectLable} htmlFor="city">
                Location
              </label>
              <div className={css.selectIconWrap}>
                <svg className={css.selectIcon} width="20" height="20">
                  <use href={`${iconsPath}#location`}></use>
                </svg>
                <Field
                  className={css.select}
                  component="select"
                  id={locationFieldId}
                  name="city"
                >
                  <option id="city" value="">
                    City
                  </option>
                  <option id="city" value="dnipro">
                    Dnipro, Ukraine
                  </option>
                  <option id="city" value="kharkiv">
                    Kharkiv, Ukraine
                  </option>
                  <option id="city" value="kyiv">
                    Kyiv, Ukraine
                  </option>
                  <option id="city" value="lviv">
                    Lviv, Ukraine
                  </option>
                  <option id="city" value="odesa">
                    Odesa, Ukraine
                  </option>
                  <option id="city" value="poltava">
                    Poltava, Ukraine
                  </option>
                  <option id="city" value="sumy">
                    Sumy, Ukraine
                  </option>
                </Field>
              </div>
            </div>
            <div>
              <Heading tag="h2" variant="filtersB2" textColor>
                Filters
              </Heading>
              <div className={css.filtersWrap}>
                {/* Vehicle equipment checkbox */}
                <div className={css.checkboxGroup}>
                  <Heading
                    tag="h3"
                    variant="headerH3"
                    underlined
                    id="checkbox-group"
                  >
                    Vehicle equipment
                  </Heading>
                  <div
                    className={css.checkboxWrap}
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <label className={css.checkboxLable}>
                      <Field
                        className={css.checkfield}
                        type="checkbox"
                        name="equipment"
                        value="AC"
                        id={ACFieldId}
                      />
                      <span className={css.checkmark}>
                        <svg
                          className={css.categoryIcon}
                          width="32"
                          height="32"
                        >
                          <use href={`${iconsPath}#ac`}></use>
                        </svg>
                        AC
                      </span>
                    </label>
                    <label className={css.checkboxLable}>
                      <Field
                        className={css.checkfield}
                        type="checkbox"
                        name="equipment"
                        value="bathroom"
                        id={bathroomFieldId}
                      />
                      <span className={css.checkmark}>
                        <svg
                          className={css.categoryIcon}
                          width="32"
                          height="32"
                        >
                          <use href={`${iconsPath}#bathroom`}></use>
                        </svg>
                        Bathroom
                      </span>
                    </label>
                    <label className={css.checkboxLable}>
                      <Field
                        className={css.checkfield}
                        type="checkbox"
                        name="equipment"
                        value="kitchen"
                        id={kitchenFieldId}
                      />
                      <span className={css.checkmark}>
                        <svg
                          className={css.categoryIcon}
                          width="32"
                          height="32"
                        >
                          <use href={`${iconsPath}#kitchen`}></use>
                        </svg>
                        Kitchen
                      </span>
                    </label>
                    <label className={css.checkboxLable}>
                      <Field
                        className={css.checkfield}
                        type="checkbox"
                        name="equipment"
                        value="TV"
                        id={TVFieldId}
                      />
                      <span className={css.checkmark}>
                        <svg
                          className={css.categoryIcon}
                          width="32"
                          height="32"
                        >
                          <use href={`${iconsPath}#tv`}></use>
                        </svg>
                        TV
                      </span>
                    </label>
                    <label className={css.checkboxLable}>
                      <Field
                        className={css.checkfield}
                        type="checkbox"
                        name="equipment"
                        value="radio"
                        id={radioFieldId}
                      />
                      <span className={css.checkmark}>
                        <svg
                          className={css.categoryIcon}
                          width="32"
                          height="32"
                        >
                          <use href={`${iconsPath}#radio`}></use>
                        </svg>
                        Radio
                      </span>
                    </label>
                    <label className={css.checkboxLable}>
                      <Field
                        className={css.checkfield}
                        type="checkbox"
                        name="equipment"
                        value="refrigerator"
                        id={refrigeratorFieldId}
                      />
                      <span className={css.checkmark}>
                        <svg
                          className={css.categoryIcon}
                          width="32"
                          height="32"
                        >
                          <use href={`${iconsPath}#refrigerator`}></use>
                        </svg>
                        Refrigerator
                      </span>
                    </label>
                    <label className={css.checkboxLable}>
                      <Field
                        className={css.checkfield}
                        type="checkbox"
                        name="equipment"
                        value="microwave"
                        id={microwaveFieldId}
                      />
                      <span className={css.checkmark}>
                        <svg
                          className={css.categoryIcon}
                          width="32"
                          height="32"
                        >
                          <use href={`${iconsPath}#microwave`}></use>
                        </svg>
                        Microwave
                      </span>
                    </label>
                    <label className={css.checkboxLable}>
                      <Field
                        className={css.checkfield}
                        type="checkbox"
                        name="equipment"
                        value="gas"
                        id={gasFieldId}
                      />
                      <span className={css.checkmark}>
                        <svg
                          className={css.categoryIcon}
                          width="32"
                          height="32"
                        >
                          <use href={`${iconsPath}#gas`}></use>
                        </svg>
                        Gas
                      </span>
                    </label>
                    <label className={css.checkboxLable}>
                      <Field
                        className={css.checkfield}
                        type="checkbox"
                        name="equipment"
                        value="water"
                        id={waterFieldId}
                      />
                      <span className={css.checkmark}>
                        <svg
                          className={css.categoryIcon}
                          width="32"
                          height="32"
                        >
                          <use href={`${iconsPath}#water`}></use>
                        </svg>
                        Water
                      </span>
                    </label>
                  </div>
                </div>

                {/* Vehicle type radio */}
                <div className={css.radioGroup}>
                  <Heading
                    tag="h3"
                    variant="headerH3"
                    underlined
                    id="radio-group"
                  >
                    Vehicle type
                  </Heading>
                  <div
                    className={css.checkboxWrap}
                    role="group"
                    aria-labelledby="radio-group"
                  >
                    <label className={css.checkboxLable}>
                      <Field
                        className={css.checkfield}
                        type="radio"
                        name="form"
                        value="panelTruck"
                        id={panelTruckFieldId}
                      />
                      <span className={css.checkmark}>
                        <svg
                          className={css.categoryIcon}
                          width="32"
                          height="32"
                        >
                          <use href={`${iconsPath}#van`}></use>
                        </svg>
                        Van
                      </span>
                    </label>
                    <label className={css.checkboxLable}>
                      <Field
                        className={css.checkfield}
                        type="radio"
                        name="form"
                        value="fullyIntegrated"
                        id={fullyIntegratedFieldId}
                      />
                      <span className={css.checkmark}>
                        <svg
                          className={css.categoryIcon}
                          width="32"
                          height="32"
                        >
                          <use href={`${iconsPath}#fullyintegrated`}></use>
                        </svg>
                        Fully Integrated
                      </span>
                    </label>
                    <label className={css.checkboxLable}>
                      <Field
                        className={css.checkfield}
                        type="radio"
                        name="form"
                        value="alcove"
                        id={alcoveFieldId}
                      />
                      <span className={css.checkmark}>
                        <svg
                          className={css.categoryIcon}
                          width="32"
                          height="32"
                        >
                          <use href={`${iconsPath}#alcove`}></use>
                        </svg>
                        Alcove
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant="filled"
              text="Submit"
              btnType="submit"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
