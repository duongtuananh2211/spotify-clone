export const REGEX = {
    NUMBER_FORMAT: /(\d)(?=(\d\d\d)+(?!\d))/g
}

export const numberFormat = (str: string) => str.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

export const trimZeroAfter = (str: string) => str.replace(/(\.)?0+$/, "");