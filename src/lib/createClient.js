import * as contentful from 'contentful'
import { spaceeId, accessToken } from '../constants'

// Use a variável accessToken conforme necessário no seu código

export const client = contentful.createClient({
  
    // eslint-disable-next-line no-undef
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    // eslint-disable-next-line no-undef
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
});