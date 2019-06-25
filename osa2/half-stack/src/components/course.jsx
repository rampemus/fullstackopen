import React from 'react'
import Header from './header'
import Content from './content'
import Total from './total'

const Course = ({course}) => {
    // console.log(course)
    return (
        <div>
            <Header text={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course
