askUser(['What is your name?', 'How old are you?'], showResults)


function askUser(questions, callback) {
    const results = []

    questions.reverse()

    for (const question of questions) {
        const modal = makeModal(document.body)
        const p = document.createElement('p')
        const input = document.createElement('input')

        p.append(question)
        modal.append(p, input)

        input.onkeydown = (e) => {
            if (e.key === 'Enter') {
                results.push({ question, answer: input.value })
                modal.remove()

                if (results.length == questions.length) {
                    callback(results)
                }
            }
        }
    }
}

function makeModal(parent) {
    const modal = document.createElement('dialog')

    parent.append(modal)
    modal.showModal()

    return modal
}

function makeList(parent, objects) {
    const ul = document.createElement('ul')

    for (const obj of objects) {
        const li = document.createElement('li')

        li.append(Object.values(obj).join(': '))
        ul.append(li)
    }

    parent.append(ul)
}

function showResults(results) {
    const modal = makeModal(document.body)
    const list = makeList(modal, results)
}
