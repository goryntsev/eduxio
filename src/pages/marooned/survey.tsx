import React from "react";
import Layout from "@theme/Layout";

import "survey-core/defaultV2.min.css";
import "./survey.css";
import "survey-core/survey.i18n";
import { StylesManager, Model, FunctionFactory } from "survey-core";
import { Survey } from "survey-react-ui";

import { arrayToHtmlList, rankingsDiff } from "./helpers";

StylesManager.applyTheme("defaultV2");

// Варианты действий
const choices = [
  "Обследовать атолл и его лагуны",
  "Найти источник воды",
  "Разработать долгосрочный (больше, чем на одну неделю) план выживания",
  "Договориться о базовых правилах взаимодействия друг с другом",
  "Подготовить способы подачи сигнала бедствия",
  "Успокоить члена вашей группы, у которого истерика",
  "Оказать помощь тем, у кого солнечный ожог",
  "Построить навес для защиты от солнца",
  "Найти еду",
  "Подготовить защиту от насекомых, тропических болезней и опасных животных"
];

// Экспертное решение
const expertRanking = [
  "Успокоить члена вашей группы, у которого истерика",
  "Оказать помощь тем, у кого солнечный ожог",
  "Договориться о базовых правилах взаимодействия друг с другом",
  "Подготовить способы подачи сигнала бедствия",
  "Обследовать атолл и его лагуны",
  "Построить навес для защиты от солнца",
  "Найти источник воды",
  "Найти еду",
  "Разработать долгосрочный (больше, чем на одну неделю) план выживания",
  "Подготовить защиту от насекомых, тропических болезней и опасных животных"
];


// Конфигурация викторины
const surveyJson = {
  showQuestionNumbers: "off",
  locale: "ru",
  pages: [{
    elements: [{
      type: "panel",
      name: "individualRankingPanel",
      title: "Индивидуальное решение",
      elements: [{
        type: "ranking",
        name: "individualRanking",
        title: "Выбирайте!",
        commentText: "Это комментарий",
        choices: choices
      }]
    }]
  }, {
    elements: [{
      type: "panel",
      name: "groupRankingPanel",
      title: "Групповое решение",
      elements: [{
        type: "ranking",
        name: "groupRanking",
        title: "Выбирайте вместе!",
        choices: choices
      }]
    }]
  }],
};


/* Генерирует итоговую страницу с результатами викторины */
function generateCompletedPage (survey: Model) {
  let individualRanking = survey.getValue("individualRanking");
  let groupRanking = survey.getValue("groupRanking");
  survey.completedHtml =
   `<div class="sd-completedpanel">
      <h3>Индивидуальное решение</h3>
      <p>Отклонение от экспертного: <strong>${rankingsDiff(individualRanking, expertRanking)}</strong></p>
      ${arrayToHtmlList(individualRanking)}
      <hr/>
      <h3>Групповое решение</h3>
      <p>Отклонение от экспертного: <strong>${rankingsDiff(groupRanking, expertRanking)}</strong></p>
      ${arrayToHtmlList(groupRanking)}
    </div>`;  
}


function App() {
    const survey = new Model(surveyJson);
    survey.onComplete.add((survey) => generateCompletedPage(survey));

    return <Survey model={survey}></Survey>
}


export default function Solution() {
   return (
    <Layout title="Решение">
        <App></App>
    </Layout>
   )
}
