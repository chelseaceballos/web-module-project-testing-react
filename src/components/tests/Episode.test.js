import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name: "test name",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "test text1",
    runtime: 1
}

// Add in appropriate test data structure here.
const testEpisodeWithoutImage = {    
    id:2,
    name: "test name",
    image: null, 
    season: 1,
    number: 2,
    summary: "test text2",
    runtime: 45
}

test("renders without error", () => {
 render(<Episode episode={testEpisode} />); 
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={testEpisode} />);
    let summary = screen.queryByText(/test text1/i)
    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).not.toBeFalsy();
});

test("renders default image when image is not defined", ()=>{
    render (<Episode episode={testEpisodeWithoutImage}/>)
    const image = screen.queryByAltText('./stranger_things.png');
    expect(image).toBeInTheDocument();
    expect(image).toBeTruthy();
    expect(image).not.toBeFalsy();
});

//Tasks
//1. Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
//2. Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. Use no more then 3 different expect statements to test the the existance of the summary value.
//3. The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to null. Test that the alt tag of the image displayed is set to './stranger_things.png'.