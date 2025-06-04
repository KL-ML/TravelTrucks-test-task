// import css from './Hero.module.css';


import Section from '../Section/Section';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
      <Section variant="hero">
        <div>
          <Heading variant="heroH1">Campers of your dreams</Heading>
          <Heading tag="h2" variant="heroH2">
            You can find everything you want in our catalog
          </Heading>
          <Link to="/catalog">
            <Button type="button" text="View Now" variant="filled" />
          </Link>
        </div>
      </Section>
    </>
  );
}
