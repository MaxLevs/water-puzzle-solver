import Head from 'next/head'
import { useState } from 'react';
import Tube from '../components/tube'
import State from '../components/state'
import Solution from '../components/solution'
import Selector from '../components/selector'
import styles from '../styles/Home.module.css'
import stateLib from '../lib/states'

export default function Home() {

  var tubes1 = [
    ["1", "2", "3", "4"],
    ["5", "6", "6", "5"],
    ["7", "3", "8", "9"],
    ["8", "4", "1", "10"],
    ["3", "10", "9", "11"],
    ["12", "12", "2", "9"],
    ["8", "3", "11", "4"],
    ["7", "6", "5", "10"],
    ["9", "12", "4", "1"],
    ["11", "7", "1", "8"],
    ["6", "2", "5", "11"],
    ["12", "10", "2", "7"],
    [],
    []
  ];

  let colors = [
    "red",
    "blue",
    "palegreen",
    "rebeccapurple",
    "grey",
    "orange",
    "salmon",
    "maroon",
    "green",
    "lemonchiffon",
    "lightskyblue",
    "yellowgreen"
  ]

  var tubes2 = tubes1.map((tube) => {
    return tube.map((number) => colors[number - 1])
  })

  //console.log(tubes2)

  //let history = [];
  //history.push(tubes2)

  //let { stackI, stackJ } = stateLib.resolve(history)

  const PAGE_STATUSES = {
    NUMBER_INPUT: 0,
    COLOR_INPUT: 1,
    SOLUTION_OUTPUT: 2
  }
  const [totalNumber, setTotalNumber] = useState('')
  const [emptyNumber, setEmptyNumber] = useState('')
  const [color, setColor] = useState(colors[0])
  const [tubes, setTubes] = useState([])
  const [history, setHistory] = useState([])
  const [pageStatus, setPageStatus] = useState(PAGE_STATUSES.NUMBER_INPUT)


  const setNumberOfTubes = function (totalNumber, emptyNumber) {
    setTotalNumber(totalNumber)
    setEmptyNumber(emptyNumber)
    const localTubes = []
    for (let i = 0; i < totalNumber; i++) {
      localTubes.push([])
    }
    setTubes(localTubes)
    setPageStatus(PAGE_STATUSES.COLOR_INPUT)
  }

  const handleClick = function (index, color) {
    let tubesCopy = tubes.slice()
    if (tubesCopy[index].length < 4) tubesCopy[index].push(color)
    setTubes(tubesCopy)
  }

  const handleChangeColor = function (event) {
    setColor(event.target.value)
  }

  const solvePuzzle = function () {
    let historyLocal = []
    historyLocal.push(tubes)
    stateLib.resolve(historyLocal)
    setHistory(historyLocal)
    setPageStatus(PAGE_STATUSES.SOLUTION_OUTPUT)
  }

  function PageComponent() {
    switch (pageStatus) {
      case PAGE_STATUSES.NUMBER_INPUT:
        return (
          <>
            <h1>Introduce los datos</h1>
            <Selector onClick={setNumberOfTubes} />
          </>
        )
      case PAGE_STATUSES.COLOR_INPUT:
        return (
          <>
            <State tubes={tubes} numberOfReadOnly={emptyNumber} colorSelected={color} onClick={handleClick} />
            <select name="select" onChange={handleChangeColor} style={{ color: color }}>
              {colors.map((el, index) => {
                return (
                  <option key={index} value={el} style={{ color: el }}>&#9632;</option>
                )
              })}
            </select>
            <button onClick={solvePuzzle}>Resolver</button>
          </>
        )
      case PAGE_STATUSES.SOLUTION_OUTPUT:
        return (
          <Solution history={history} />
        )
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Water Sort Puzzle Solver</title>
        <meta name="description" content="Webapp to solve these tricky puzzles and laught at your friends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PageComponent />
      </main>
    </div>
  )
}
