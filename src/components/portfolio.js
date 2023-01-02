import React from 'react';
import Projects from './project.js'


let projects = [
  {
    id: 0,
    title: 'Password Generator',
    description: 'Ut tincidunt dictum leo, vitae viverra ipsum bibendum eget. Maecenas sed felis est. Morbi vitae dictum orci. Duis convallis semper sem quis scelerisque. Donec commodo lacus non massa feugiat, quis lobortis nisl porttitor. Curabitur ultrices elit in faucibus eleifend. Integer nec feugiat lacus. Integer quis mollis dui. Integer interdum sem neque, sit amet dapibus dolor suscipit nec. Suspendisse ut fermentum dui. In congue neque dolor, sed consectetur erat ultrices ut. Nunc a diam condimentum, tincidunt ante id, cursus leo. Nam ut egestas sem, non porttitor urna.',
    github: 'https://github.com/Joeychez23/Password-generator',
    link: 'https://joeychez23.github.io/Password-generator/',
    image: 'images/password.jpg'
  },
  {
    id: 1,
    title: 'Weather Dashboard',
    description: 'Ut tincidunt dictum leo, vitae viverra ipsum bibendum eget. Maecenas sed felis est. Morbi vitae dictum orci. Duis convallis semper sem quis scelerisque. Donec commodo lacus non massa feugiat, quis lobortis nisl porttitor. Curabitur ultrices elit in faucibus eleifend. Integer nec feugiat lacus. Integer quis mollis dui. Integer interdum sem neque, sit amet dapibus dolor suscipit nec. Suspendisse ut fermentum dui. In congue neque dolor, sed consectetur erat ultrices ut. Nunc a diam condimentum, tincidunt ante id, cursus leo. Nam ut egestas sem, non porttitor urna.',
    github: 'https://github.com/Joeychez23/Weather-Dashboard/',
    link: 'https://joeychez23.github.io/Weather-Dashboard/',
    image: 'images/weather.jpg'
  },
  {
    id: 2,
    title: 'Daily Planner',
    description: 'Ut tincidunt dictum leo, vitae viverra ipsum bibendum eget. Maecenas sed felis est. Morbi vitae dictum orci. Duis convallis semper sem quis scelerisque. Donec commodo lacus non massa feugiat, quis lobortis nisl porttitor. Curabitur ultrices elit in faucibus eleifend. Integer nec feugiat lacus. Integer quis mollis dui. Integer interdum sem neque, sit amet dapibus dolor suscipit nec. Suspendisse ut fermentum dui. In congue neque dolor, sed consectetur erat ultrices ut. Nunc a diam condimentum, tincidunt ante id, cursus leo. Nam ut egestas sem, non porttitor urna.',
    github: 'https://github.com/Joeychez23/daily-planner',
    link: 'https://joeychez23.github.io/daily-planner/',
    image: 'images/planner.jpg'
  },
  {
    id: 3,
    title: 'JS Test',
    description: 'Ut tincidunt dictum leo, vitae viverra ipsum bibendum eget. Maecenas sed felis est. Morbi vitae dictum orci. Duis convallis semper sem quis scelerisque. Donec commodo lacus non massa feugiat, quis lobortis nisl porttitor. Curabitur ultrices elit in faucibus eleifend. Integer nec feugiat lacus. Integer quis mollis dui. Integer interdum sem neque, sit amet dapibus dolor suscipit nec. Suspendisse ut fermentum dui. In congue neque dolor, sed consectetur erat ultrices ut. Nunc a diam condimentum, tincidunt ante id, cursus leo. Nam ut egestas sem, non porttitor urna.',
    github: 'https://github.com/Joeychez23/JS-quiz-4',
    link: 'https://joeychez23.github.io/JS-quiz-4/',
    image: 'images/quiz.jpg'
  },
  {
    id: 4,
    title: 'Portfolio',
    description: 'Ut tincidunt dictum leo, vitae viverra ipsum bibendum eget. Maecenas sed felis est. Morbi vitae dictum orci. Duis convallis semper sem quis scelerisque. Donec commodo lacus non massa feugiat, quis lobortis nisl porttitor. Curabitur ultrices elit in faucibus eleifend. Integer nec feugiat lacus. Integer quis mollis dui. Integer interdum sem neque, sit amet dapibus dolor suscipit nec. Suspendisse ut fermentum dui. In congue neque dolor, sed consectetur erat ultrices ut. Nunc a diam condimentum, tincidunt ante id, cursus leo. Nam ut egestas sem, non porttitor urna.',
    github: 'https://github.com/Joeychez23/portfolio-home',
    link: 'https://joeychez23.github.io/portfolio-home/',
    image: 'images/portfolio.jpg'
  },
  {
    id: 5,
    title: 'Profile Generator',
    description: 'Ut tincidunt dictum leo, vitae viverra ipsum bibendum eget. Maecenas sed felis est. Morbi vitae dictum orci. Duis convallis semper sem quis scelerisque. Donec commodo lacus non massa feugiat, quis lobortis nisl porttitor. Curabitur ultrices elit in faucibus eleifend. Integer nec feugiat lacus. Integer quis mollis dui. Integer interdum sem neque, sit amet dapibus dolor suscipit nec. Suspendisse ut fermentum dui. In congue neque dolor, sed consectetur erat ultrices ut. Nunc a diam condimentum, tincidunt ante id, cursus leo. Nam ut egestas sem, non porttitor urna.',
    github: 'https://github.com/Joeychez23/profile-gen',
    link: 'https://joeychez23.github.io/profile-gen/',
    image: 'images/profile.jpg'
  }
]
function Portfolio() {
  return (
    <div className="container">
      <h2 className="title">Portfolio</h2>
      <Projects projects={projects} />
    </div>
  );
}

export default Portfolio