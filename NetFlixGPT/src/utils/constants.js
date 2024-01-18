// import { OPENAI_KEY } from '../../src/ravi';

export const LOGO = 'https://www.freepnglogos.com/uploads/netflix-logo-0.png';
export const BG_IMAGE =
  'https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg';
export const PROFILE_AVATAR = 'https://avatars.githubusercontent.com/u/89252630?v=4';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_TMDB_TOKEN,
  },
};

export const TMDB_POSTER_URL = 'https://image.tmdb.org/t/p/w500';
/** Its and array */
export const SUPPORT_LANGUAGE = [
  { identifier: 'en', name: 'English' },
  { identifier: 'hindi', name: 'Hindi' },
  { identifier: 'spanish', name: 'Spanish' },
];

// TODO: Ask the open AI key from the user
const OPENAI_GPT_API = import.meta.env.VITE_OPENAPI_KEY;
console.log(OPENAI_GPT_API);
