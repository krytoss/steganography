import React from "react"
import { Accordion } from "flowbite-react"

const IntroAccordion = ({ items }) => {
    return (
        <Accordion className='w-full text-white text-base'>
            { items.map((e, i) => {
                return (
                    <Accordion.Panel key={i}>
                        <Accordion.Title>{ e.title }</Accordion.Title>
                        <Accordion.Content>
                            { e.content }
                        </Accordion.Content>
                    </Accordion.Panel>
                )
            }) }
        </Accordion>
    )
}

export default IntroAccordion