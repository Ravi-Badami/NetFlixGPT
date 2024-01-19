import OpenAI from 'openai';
// import { OPENAI_KEY } from '../ravi';

// console.log(import.meta.env.VITE_OPENAPI_KEY);
// console.log(import.meta.env.VITE_TMDB_TOKEN);

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAPI_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
});

export default openai;
