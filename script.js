const list = [
  {
    name: "João",
    n1: 10,
    n2: 4,
  },
  {
    name: "Letícia",
    n1: 9,
    n2: 5.5,
  },
  {
    name: "Diego",
    n1: 7,
    n2: 5,
  },
  {
    name: "Júlia",
    n1: 8.5,
    n2: 6,
  }
]

function media(student) {
  let averageNote = ((student.n1+student.n2)/2).toFixed(2)
  if (averageNote < 7) {
    alert(`O(A) aluno(a) ${student.name} possui média de ${averageNote}. \n Não foi desta vez! Estude mais!`)
  } else {
    alert(`O(A) aluno(a) ${student.name} possui média de ${averageNote}. \n Parabéns!`)
  }
}

for (let student of list) {
  media(student)
}