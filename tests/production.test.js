import { production } from '../src/index.js'

test('min/un to hour/un', () => {
  expect(production(30).from('min/un').to('hour/un').value).toEqual(0.5)
})

test('min/un to sec/un', () => {
  expect(production(1).from('min/un').to('sec/un').value).toEqual(60)
})

test('un/sec to un/hour', () => {
  expect(production(0.1).from('un/sec').to('un/hour').value).toEqual(360)
})

test('un/sec to un/min', () => {
  expect(production(0.1).from('un/sec').to('un/min').value).toEqual(6)
})

test('min/un to un/min', () => {
  expect(production(1).from('min/un').to('un/min').value).toEqual(1)
})

test('hour/un to un/hour', () => {
  expect(production(1).from('hour/un').to('un/hour').value).toEqual(1)
})

test('sec/un to un/sec', () => {
  expect(production(1).from('sec/un').to('un/sec').value).toEqual(1)
})
