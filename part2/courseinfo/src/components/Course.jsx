import { useState } from 'react'
import viteLogo from '/vite.svg'


const Header = ({ text }) => 
    (
        <div>
            <h1>{text}</h1>
        </div>
    )

const Part = ({ name, exer }) => {

    return (
        <div>
            <p>{name} {exer}</p>
        </div>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part =>
                <Part 
                    name={part.name} 
                    exer={part.exercises}
                />
             )}
        </div>
    )
}

const Course = ({ course }) => {
    const { id, name, parts } = course

    const total = parts.map(part => part.exercises).reduce((acc, cv) => acc + cv, 0)

    return (
        <div>
            <Header text={name} />
            <Content parts={parts} />
            <p>total of {total} exercises </p>
        </div>
    )
}

export default Course;
