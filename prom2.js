const questions = [
    'Who are you?',
    'Where do you go?',
    'What language do you speak?',
    'What do you want?'
]
// const p = document.querySelector('p')
// const input = document.getElementsByClassName('input')

// const [form, p, input] = document.querySelectorAll('form, p, input')
const form = document.querySelector('form')
const p = document.querySelector('p')
const input = document.getElementsByClassName('input')[0]
const submit = document.getElementsByClassName('submit')[0]
askUser(questions).then(showResults)

async function askUser(questions) {
    const answers = []

    // for (const question of questions) {
    //     const promise = new Promise(executor)

    //     p.innerText = question

    //     await promise

    //     function executor(resolve) {
    //         answers.push(input.value)
    //         resolve()
    //     }
    // }
    for (const question of questions) {
        const promise = new Promise(resolve => {

            form.onsubmit = (event) => {
                event.preventDefault()
                resolve(input.value)
                input.value = ''
            }
        })

        p.innerText = question

        answers.push(await promise)
    }
    return answers
}


function showResults(answers) {
    p.innerText = `Your answers are: ${answers}`
    input.hidden = "true"
    submit.hidden = "true"

}