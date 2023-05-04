import {Suspense} from 'react';
import { Metadata } from 'next';
import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';
import UserPosts from '@/app/users/[userId]/components/UserPosts';
import getAllUsers from '@/lib/getAllUsers';

import {notFound} from 'next/navigation'

type Params = {
  params: {
    userId: string
  }
}

export async function generateMetadata  ({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User  = await userData;

  if(!user?.name) {
    return {
      title: 'User not found'
    }
  }

  return {
    title: user.name,
    description: `This is page of ${user.name}`
  }
}

export default async function UserPage ({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  const user = await userData;

  // const [user, posts] = await Promise.all([userData, userPosts])

  if(!user) return notFound();


  return (
      <div>
        <h2>{ user.name }</h2>
        <br/>
        <Suspense fallback={<div>loading.....</div>}>
          {/* @ts-expect-error Server Component*/}
          <UserPosts promise={userPostsData}/>
        </Suspense>

      </div>
  );
};

export async function generateStaticParams () {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  return users.map((user) => ({userId: user.id.toString()}))
}
