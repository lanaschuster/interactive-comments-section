export const usePostTextFormatter = (text) => {

  let outputs = text.match(/@[A-Za-z0-9]+/g);

  for (const i in outputs) {
    const formatted = `<a class="username" href="#">${outputs[i]}</a>`;
    text = text.replaceAll(outputs[i], formatted);
  }

  return text;
};
