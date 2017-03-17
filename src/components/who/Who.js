import React, {Component} from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

export default class Who extends Component {
    render() {
        return (
            <div>
                <Section1 />
                <Section2 />
                <Section3 />
            </div>
        );
    }
};