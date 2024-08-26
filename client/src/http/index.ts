import axios from 'axios';

const $host = axios.create({
   baseURL: 'api/',
});

const $ninjaApi = axios.create({
   baseURL: 'https://api.api-ninjas.com/v1/',
   headers: { 'X-Api-Key': process.env.REACT_APP_NINJA_API_KEY },
});

export const getRandomText = async () => {
   const { data } = await $ninjaApi.get<{ word: string[] }>('randomword/');
   return data.word.join(' ');
};

export { $host };
