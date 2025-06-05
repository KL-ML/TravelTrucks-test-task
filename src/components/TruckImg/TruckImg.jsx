import css from './TruckImg.module.css';

export default function TruckImg({ img }) {
  return (
    <>
      <div className={css.imgWrap}>
        <img className={css.img} src={img} />
      </div>
    </>
  );
}
