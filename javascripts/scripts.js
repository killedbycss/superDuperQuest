colors()
rectanglesAnim()
arrows()
final()

let stages = [
  {
    question: 'Ты человек?',
    answers: [
      {
        text: 'Да',
        count: 1
      },
      {
        text: 'Нет',
        count: 0
      }
    ]
  },
  {
    question: 'Ты фея?',
    answers: [
      {
        text: 'Да',
        count: 1
      },
      {
        text: 'Нет',
        count: 0
      }
    ]
  },
  {
    question: 'Ты овощ?',
    answers: [
      {
        text: 'Да',
        count: 0
      },
      {
        text: 'Нет',
        count: 1
      }
    ]
  }
]
let currentStage = 0
let resultCount = 0
let answers = document.querySelectorAll('.answer')

results = ['win', 'mda']

initTest(stages)
chooseAnswer(stages, results)

function initTest(stages) {
  const question = document.querySelector('.questText1')

  question.innerText = stages[currentStage].question

  for (let i = 0; i < answers.length; i++) {
    answers[i].innerText = stages[currentStage].answers[i].text
    answers[i].dataset.count = stages[currentStage].answers[i].count
  }
}

function chooseAnswer(stages, results) {
  answers.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      setTimeout(() => {
        resultCount += Number(checkbox.dataset.count)
        updateStage(stages, results)
      }, 300)
    })
  })
}

function updateStage(stages, results) {
  if (++currentStage < stages.length) {
    initTest(stages)
  } else {
    showResult(results)
  }
}

function showResult(results) {
  const section = document.querySelector('#questions')
  section.innerHTML = ''
  if (resultCount >= 2) {
    section.innerText = 'молодец'
  } else {
    section.innerText = 'мда'
  }
}

function rectanglesAnim() {
  let wastes = document.querySelectorAll('.waste')
  let wastesM = Array.from(wastes)
  let section = document.querySelector('#key')

  let sorted = wastesM.sort(() => Math.random() - 0.5)
  console.log(sorted)
  section.innerHTML = ''
  sorted.forEach((sort) => {
    section.appendChild(sort)
  })

  wastes.forEach((waste) => {
    waste.addEventListener('click', () => {
      waste.classList.remove('paused')
    })
  })
}

function colors() {
  let knight = document.querySelector('#knightWords')
  let dragon = document.querySelector('#dragonWords')
  let button1 = document.querySelector('#p1')
  let button2 = document.querySelector('#p2')
  let button3 = document.querySelector('#p3')
  let button4 = document.querySelector('#p4')
  let buttons = document.querySelectorAll('#panel button')
  let h2 = dragon.querySelector('h2')

  let colors = ['#00aa41', '#db5aff', '#ffcc00;', '#2d96ff']
  let cnt = 0

  knight.style.backgroundColor = `${colors[cnt]}`

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let cl = button.className

      if (cl == 'p1') {
        dragon.style.backgroundColor = `#00aa41`
        h2.innerText = 'Кипарис'
      } else if (cl == 'p2') {
        dragon.style.backgroundColor = `#2d96ff`
        h2.innerText = 'Парис'
      } else if (cl == 'p3') {
        dragon.style.backgroundColor = `#db5aff`
        h2.innerText = 'Денис'
      } else if (cl == 'p4') {
        dragon.style.backgroundColor = `#ffcc00;`
        h2.innerText = 'Редис'
      }

      if (
        window.getComputedStyle(knight).backgroundColor ==
        window.getComputedStyle(dragon).backgroundColor
      ) {
        cnt++
        knight.style.backgroundColor = `${colors[cnt]}`
      }

      if (cnt >= 5) {
        h2.innerText = 'You win'
        // console.log('win')
        dragon.style.backgroundColor = `#2d96ff`
      }
    })
  })
}

function arrows() {
  let arrowLeft = document.querySelector('#a1')
  let arrowRight = document.querySelector('#a2')

  arrowLeft.addEventListener('click', () => {
    window.scrollBy({
      top: -100,
      left: 0,
      behavior: 'smooth'
    })
  })
  arrowRight.addEventListener('click', () => {
    window.scrollBy({
      top: 100,
      left: 0,
      behavior: 'smooth'
    })
  })
}

function final() {
  let icon = document.querySelector('.endIcon')
  let counter = 0
  let text = allEndings.querySelector('h2')

  icon.addEventListener('click', () => {
    counter++
    if (counter == 5) {
      text.innerText = 'А вот и все'
    }
  })
}
