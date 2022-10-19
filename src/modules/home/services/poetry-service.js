import clientHttp from '@/http/axios-setup';

export const findByTitle = async title => {
  try {
    
    const url = `${process.env.VUE_POETRY_API_URL}/title/${title}`;
    const response = await clientHttp.get(url);

    const [ poetry ] = response.data;
    return poetry;

  } catch (error) {
    throw new Error(error);
  }
};

export const findAllAuthors = async () => {
  try {
    
    const url = `${process.env.VUE_POETRY_API_URL}/author`;
    const response = await clientHttp.get(url);

    return response.data;

  } catch (error) {
    throw new Error(error);
  }
};

export const findAllTitles = async () => {
  try {
    
    const url = `${process.env.VUE_POETRY_API_URL}/title`;
    const response = await clientHttp.get(url);

    return response.data.titles;

  } catch (error) {
    throw new Error(error);
  }
};
