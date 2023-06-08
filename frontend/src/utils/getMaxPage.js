import { ITEMS_PER_PAGE } from './const';

export default (count) => Math.ceil(count / ITEMS_PER_PAGE);
