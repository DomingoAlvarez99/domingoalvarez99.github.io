const slashEscaped = '%2F';

export const escapeSlashes = (str) => str.replace('/', slashEscaped);
export const unescapeSlashes = (str) => str.replace(slashEscaped, '/');
