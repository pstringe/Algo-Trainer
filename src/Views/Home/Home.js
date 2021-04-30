import {Grid} from '@material-ui/core';
import Carousel from './Carousel';
import Section from '../../Components/Layout/Section';

const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit ante, consectetur vel cursus sed, lobortis eu nibh. In hendrerit ante nec mauris auctor ultrices a eget lacus. Duis a felis nec ligula ornare dictum sit amet et lectus. Aliquam pharetra mauris nec libero consequat, id iaculis mi lacinia. Proin vestibulum suscipit scelerisque. Sed efficitur dui ut tempor tristique. Etiam luctus bibendum augue sit amet consequat. Suspendisse sed est sit amet sem porta sollicitudin vitae vitae lacus. Vestibulum a tempor libero. Vivamus neque libero, laoreet accumsan nunc non, venenatis laoreet velit.';

const Home = () => {
    const sections = [
        {
            title: 'Facts about Teen Driving',
            summary: 'How do your behaviors and habits affect the saftey of everyone on the road?',
            description: ipsum,
            linkText: 'Learn More',
            path: '/facts',
            image: null,
        },
        {
            title: 'Featured Story',
            summary: 'Hear the experience of alma and marium when their son was in a car accident.',
            description: ipsum,
            linkText: 'See For Yourself',
            path: '/stories',
            image: null,
        },
        {
            title: 'Take the pledge to save lives',
            summary: 'Learn about the perks of earning you safe driving pledge certificate',
            description: ipsum,
            linkText: 'Take the Pledge',
            path: '/quiz',
            image: null,
        },
       
    ]
    return ( 
        <Grid container direction='column'>
            <Carousel features={sections}/>
            {sections.map((section, idx) => {
                return (
                    <Section section={section} />
                );
            })}
        </Grid> 
    );
}
 
export default Home;