import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { type Schema } from '@/amplify/data/resource';
import config from '@/amplify_outputs.json';
import { cookies } from 'next/headers';

export const publicClient = generateServerClientUsingCookies<Schema>({
	config,
	cookies,
	authMode: 'apiKey',
});