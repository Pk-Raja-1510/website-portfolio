import Head from 'next/head';
import styles from '../../styles/brochure.module.css';

const Index = ({ name }) => {
  return (
    <>
      <Head>
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {name === 'sapthakiri' && (
            <iframe
              className={styles.iframe}
              loading='lazy'
              src='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFKyT0cZpM&#x2F;view?embed'
              allowfullscreen='allowfullscreen'
              allow='fullscreen'
            ></iframe>
          )}
          {name === 'tabrez' && (
            <iframe
              className={styles.iframe}
              loading='lazy'
              src='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFKyZMgihc&#x2F;view?embed'
              allowfullscreen='allowfullscreen'
              allow='fullscreen'
            ></iframe>
          )}
          {name === 'pricilla' && (
            <iframe
              className={styles.iframe}
              loading='lazy'
              src='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFKypbP8VU&#x2F;view?embed'
              allowfullscreen='allowfullscreen'
              allow='fullscreen'
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: { name: 'sapthakiri' },
      },
      {
        params: { name: 'tabrez' },
      },
      {
        params: { name: 'pricilla' },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const { name } = context.params;

  return {
    props: {
      name,
    },
  };
};

export default Index;
