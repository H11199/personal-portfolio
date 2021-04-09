import React from "react";
import iris from "../images/iris-flower.png";
import guess from "../images/guessNumber.png";
import pig from "../images/pig-game.png";
import blog from "../images/blog-website1.jpg";
import todoList from "../images/todoList2.jpg";
import Newsletter from "../images/newsletter1.jpg";
export function ProjectValue() {
  return [
    {
      projectImgLink: iris,
      projectName: "Iris Flower Classification",
      projectGitLink: "https://github.com/H11199/Iris-classification-web-app",
      projectContent:
        "A simple machine learning model deployed as a web app using flask which can predict Iris flowers",
    },
    {
      projectImgLink: pig,
      projectName: "The Pig Game",
      projectGitLink: "https://github.com/H11199/The-pig-game",
      projectContent:
        "A funny pig game in which until dice doesn't fall 1 your score goes up but if dice shows 1 and you haven't save the game then oops you lose all your earnings",
    },
    {
      projectImgLink: guess,
      projectName: "Guess The Number",
      projectGitLink: "https://github.com/H11199/Guess-My-Number-Mini-Project",
      projectContent:
        "An exciting game in which a random unknown target is generated and you have to guess. Your score depends on your accuracy.",
    },
    {
      projectImgLink: blog,
      projectName: "Daily Diary",
      projectGitLink: "https://github.com/H11199/ejs-BlogWebsite",
      projectContent:
        "A Personal daily diary built using NodeJS and mongoDB. I built this project to get my hands dirty on backend for the first time",
    },
    {
      projectImgLink: todoList,
      projectName: "The todoList",
      projectGitLink: "https://github.com/H11199/TodoList",
      projectContent:
        "I built this when I got introduced to EJS. This todoList is powered by NodeJS and mongoDB database.",
    },
    {
      projectImgLink: Newsletter,
      projectName: "Newsletter Website",
      projectGitLink: "https://github.com/H11199/Newsletter",
      projectContent:
        "I built this when I was dealing with API's. Here I used mailchimp API for newsletter subscription",
    },
  ];
}
