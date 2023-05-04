import { Metadata } from 'next';
import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Users',
}


export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  const content = (
      <section>
        <h2>
          <Link href={'/'}>Back to home</Link>
        </h2>
        <br/>
        <ul style={{ paddingLeft: '16px'}}>
          {users.map((user) => (
              <li key={user.id} style={{marginBottom: '12px'}}>
                <Link style={{color: 'red'}} href={`/users/${user.id}`}> {user.name}</Link>
                <ol style={{paddingLeft: '16px'}}>
                  <li> {user.username}</li>
                  <li> {user.email}</li>
                  <li> {user.phone}</li>
                  <li> {user.website}</li>
                </ol>
              </li>
          ))}
        </ul>
      </section>
  )

  return content;
};
