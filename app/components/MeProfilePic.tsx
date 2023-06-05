import Image from 'next/image';

export default function MyProfilePic () {
  return (
      <section className={ 'w-full mx-auto' }>
        <Image src={ 'https://www.looper.com/img/gallery/the-ending-of-avatar-finally-explained/intro-1669817126.webp' }
               className={ 'bor-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8' }
               width={ 200 }
               height={ 200 }
               style={{width: 200, height: 200}}
               priority={true}
               alt={ 'Vasyl Batih' }/>
      </section>
  );
}
