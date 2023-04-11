/**
 * 
 * @param { Date } date 
 * @returns
 */

export const dateToUnix = (date) => {
    return Math.floor(date.getTime() / 1000);
}