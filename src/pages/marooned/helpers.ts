/* Создаёт html строку со списком из упорядоченных элементов массива */
function arrayToHtmlList(array: Array<string>): string {
  var html = "";
  if (array == null) {
    html = "<p>Данные отсутствуют";
  } else {
    html += "<ol>";
    for (let item of array) {
      html += `<li>${item}</li>`;
    }
    html +="</ol>";
  }
  return html;
}


/* Рассчитывает разницу между двумя ранжированными списками */
function rankingsDiff(ranking1: Array<string>, ranking2: Array<string>): number {
    let diff = 0;
    let i2: number;
    for (let i1 = 0; i1 < ranking1.length; i1++) {
        i2 = ranking2.indexOf(ranking1[i1]);
        if (i2 < 0) continue;
        diff += Math.abs(i2 - i1);
    }
    return diff;
}

export { arrayToHtmlList, rankingsDiff };