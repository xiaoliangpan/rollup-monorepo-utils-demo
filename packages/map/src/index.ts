import { isArray } from "@pxlv1/utils";

const map = (data: string[], fn: Function) => {
  if (isArray(data)) {
    return data.map((i) => fn(i));
  }
};
export { map };
