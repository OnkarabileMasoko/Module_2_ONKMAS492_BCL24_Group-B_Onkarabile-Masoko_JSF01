export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = countcsdcd
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
