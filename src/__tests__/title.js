import React from 'react'
import renderer from 'react-test-renderer'
import Title from '../components/title'

describe('Title', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Title title="Hello" subtitle="World" />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})