import React from 'react'
import { authClient, publicClient } from '@/utils/data-server-utils';
import { cookies } from 'next/headers';
import { fetchAuthSession } from 'aws-amplify/auth';


export default async function comments() {
  const session = await fetchAuthSession();
  console.log("session", session);
  const { data, errors } = await publicClient.models.Comments.list();
  console.log("data", data);
  

  if (errors) {
    console.error(errors);
    return <div>error
    </div>
  }

  return (
	  <div>
      <h1>Comments: {data?.length ? data.length : "0"}</h1>
      <ul>
        {data.map((comment) => (
          <li key={comment.id}>
            {comment.content}
          </li>
        ))}
      </ul>
    </div>
  )
}