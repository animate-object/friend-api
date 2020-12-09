const fillIn = (template: string, values: object): string => {
  return Object.entries(values).reduce(
    (templated: string, [key, value]: [string, string]) =>
      templated.replace(`{{${key}}}`, value),
    template
  );
};

const hilite = (s: string): string => "{" + s + "}";
export default {
  fillIn,
  hilite,
};
