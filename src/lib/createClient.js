import * as contentful from 'contentful'
import { accessToken, spaceeId } from '../constants';

export const client = contentful.createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.SPACE_ID
});