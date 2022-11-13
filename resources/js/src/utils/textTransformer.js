export const convertMentionToText = (text) => {
  const regex = /@\[([^\]]+)\]\(([^\)]+)\)/g;
  const matches = text.matchAll(regex);
  let result = text;
  for (const match of matches) {
    const [fullMatch, name, id] = match;
    result = result.replace(fullMatch, `<span><a href='#'>${name}</a></span>`);
  }

  const regexTask = /#\[([^\]]+)\]\(([^\)]+)\)/g;
  const matchesTask = result.matchAll(regexTask);
  for (const match of matchesTask) {
    const [fullMatch, name, id] = match;
    result = result.replace(fullMatch, `<span><a href='/tasks/${id}'>#${name}</a></span>`);
  }

  return result;
}

export const getMentionList = (text) => {
  const regex = /@\[([^\]]+)\]\(([^\)]+)\)/g;
  const matches = text.matchAll(regex);
  let result = text;
  const mentionList = [];
  for (const match of matches) {
    const [fullMatch, name, id] = match;
    mentionList.push({ name, id });
  }
  return mentionList;
}