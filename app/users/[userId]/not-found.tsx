import Link from 'next/link';

export default function NotFound () {
  return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <p>not found</p>
        <br/>
        <br/>
        <Link href={ '/' }>Go back</Link>
      </div>
  );
}
