import * as contentful from 'contentful'

import { spaceeId, accessToken } from '../constants'

export const client = contentful.createClient({
    space: spaceeId,
    accessToken: accessToken,
});