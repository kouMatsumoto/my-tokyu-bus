interface FilteredData {
  routeName: string;
  waitTime: number;
}


/**
 * @param {string} textContentOfHTMLElement - e.g.) 渋３２ 渋谷駅行【00分待ち】.
 * @return {FilteredData|null} - when invalid text, return null.
 */
export function filterLocationDataFromText(textContentOfHTMLElement: string | null): FilteredData | null {
  if (typeof textContentOfHTMLElement !== 'string') {
    return null;
  }

  const text = textContentOfHTMLElement.trim();

  // text can be '&nbsp;' when not having information.
  if (text === '&nbsp;') {
    return null;
  }

  const regexp = /^(.+)【(\d+)分待ち】$/iu;
  // e.g.) ['渋３２ 渋谷駅行【01分待ち】', '渋３２ 渋谷駅行', '00'], null
  const matchResult = text.match(regexp);

  // null check
  if (!matchResult) {
    return null;
  }

  return {
    routeName: matchResult[1],
    waitTime: parseInt(matchResult[2]),
  };
}
