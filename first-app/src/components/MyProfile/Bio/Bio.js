import styles from './Bio.module.css'; //

function Bio() {
  return (
    <div className={styles.container}>
      <img src='https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/67c19114-3d37-4c76-92e6-ad1088a6f1f5/600x900' className={styles.avatar} alt="avatar" />
      <div className={styles.info}>
        <h2 className={styles.name}>Dmitriy Latyshev</h2>
        <ul className={styles.list}>
          <li className={styles.list__item}><b>Age:</b> 24</li>
        </ul>
      </div>
    </div>
  );
}

export default Bio;