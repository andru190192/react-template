const PX_PER_REM = 16;

export const mapToObject = <IValue = string>(map: Map<string, IValue>) => {
  const object: Record<string, IValue> = {};
  for (const [key, value] of map.entries()) {
    object[key] = value;
  }

  return object;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const EmptyFunction = () => {};

export const cleanAndCapitalize = (str: string): string =>
  str.replace(/[^a-zA-Z0-9\s]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

export const formatMoneyAmount = (amount: number) => `$${amount.toFixed(2)}`;
export const mapPxToRem = (pxValue = 0) => pxValue / PX_PER_REM;
