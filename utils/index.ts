export const clsx = (...args: (string | undefined)[]) => {
  return args.filter((item) => !!item).join(" ");
};

/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export async function asyncCatch<T, U = Error>(
  promise: Promise<T>,
  errorExt?: object
): Promise<[U | null, T | undefined]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        Object.assign(err, errorExt);
      }
      return [err, undefined];
    });
}

export function mySleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const numberWithCommas = (x: string | number, fixed: number = 0) => {
  return Number(x)
    .toFixed(fixed)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const scrollToElement = (id: string) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
