import Posts from '@/app/components/Posts';

export default function Home () {
  return (
      <main className={'px-6 mx-auto'}>
        <p className={'mt-12 md-12 text-3xl text-center dark:text-white'}>
          Hello and Welcome 👋 &nbsp;
          <span className={'whitespace-nowrap'}>
            I`m <span className={'font-bold'}>Vasyl</span>
          </span>
        </p>

        <Posts/>
      </main>
  );
}
