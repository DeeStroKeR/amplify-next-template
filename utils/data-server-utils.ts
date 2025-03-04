import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import { type Schema } from '@/amplify/data/resource';
import config from '@/amplify_outputs.json';
import { cookies } from 'next/headers';

export const publicClient = generateServerClientUsingCookies<Schema>({
	config,
	cookies,
	authMode: 'apiKey',
});

export const authClient = generateServerClientUsingCookies<Schema>({
	config,
	cookies,
	authMode: "userPool",
});

export const { 
	runWithAmplifyServerContext,
	createAuthRouteHandlers,
} = createServerRunner({
	config,
	runtimeOptions: {
		cookies: {
		  domain: '.myapp.com', // making cookies available to all subdomains
		  sameSite: 'strict',
		  maxAge: 60 * 60 * 24 * 7 // 7 days
		}
	  }
});