/**
 * Returns an object containing the given URL as an image source.
 *
 * @param url - The URL of the image.
 * @returns An object with a `uri` property containing the image URL.
 */

export const httpImage = (url: string) => {
  return { uri: url };
};
