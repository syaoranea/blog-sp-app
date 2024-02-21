import * as contentful from 'contentful'
import { spaceeId, accessToken } from '../constants'

// Use a variável accessToken conforme necessário no seu código

export const client = contentful.createClient({
  
    // eslint-disable-next-line no-undef
    space: spaceeId,
    // eslint-disable-next-line no-undef
    accessToken: accessToken
});