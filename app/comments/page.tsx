import React from 'react'
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import outputs from "@/amplify_outputs.json";
import { Amplify } from 'aws-amplify';

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default async function comments() {
  const { data, errors } = await client.models.Todo.list();
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