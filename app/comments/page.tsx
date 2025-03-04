import React from 'react'
import { publicClient } from '@/utils/data-server-utils';

export default async function comments() {
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