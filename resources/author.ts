import { Resource } from 'kurier';

export default class Author extends Resource {
    static schema = {
        attributes: {
            firstName: String,
            lastName: String,
        },
        relationships: {},
    }
}