import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { SlideSection, Pagination, RightButton, LeftButton, Flex } from '.';
import styled from 'styled-components';
import BookListingItem from '../../components/BookListingItem';
import left from '../../images/left-arrow.png';
import right from '../../images/right-arrow.png'
import { firstBatch, secondBatch, thirdBatch, fourBatch, fiveBatch } from '../../_fixtures';


const BookRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Slide = ({ info: { text, data } }) => (
    <SlideSection>
      <BookRow>
        {data.map( ({ id, title, imageUrl}) => {
            return <BookListingItem  bookId={id} key={title} imgUrl={imageUrl} title={title}/>
         } )}
      </BookRow>
    </SlideSection>
  ) 
class Slider extends Component {
    constructor(props){
        super( props );
        this.state = {
            slide: [
                {
                    id: "1",
                    text: "Image One Slider",
                    data: firstBatch
                },
                {
                    id: "2",
                    text: "Image Two Slider",
                    data: secondBatch
                },
                {
                    id: "3",
                    text: "Image Two Slider",
                    data: thirdBatch
                },
                {
                    id: "4",
                    text: "Image Two Slider",
                    data: fourBatch
                },
                {
                    id: "5",
                    text: "Image Two Slider",
                    data: fiveBatch
                }
            ],
            currentIndex: 0
        };
    }
    previousState = () => {
        const { slide, currentIndex } = this.state;
        if( currentIndex === 0){
            return this.setState({ currentIndex: slide.length - 1 })
        }
        this.setState({ currentIndex: currentIndex - 1 })
    }
    nextState = () => {
        const { currentIndex, slide } = this.state;
        if( currentIndex === slide.length - 1 ){
            return this.setState({ currentIndex: 0 })
        }
        this.setState({ currentIndex: currentIndex + 1 })
    }
    indexSlide = info => {
        const { id } = info;
        this.setState({ currentIndex: id - 1 })
    }
    render(){
        const { slide, currentIndex } = this.state;
        return (
            <>
                <Slide key={slide[currentIndex].id} info={slide[currentIndex]} />
                <Flex background>
                    {slide.map( value => {
                        let bgColor = 'white';
                        if(currentIndex + 1 === value.id ){
                            bgColor = 'orange';
                            return (
                                <Pagination key={value.id} bgColor={bgColor} onClick={() => this.indexSlide(value)}/>
                            )
                        }
                    })}
                </Flex>
                <LeftButton onClick={this.previousState}>
                    <img src={left} style={{ width: '25px', height: '25px' }}/>
                </LeftButton>
                <RightButton onClick={this.nextState}>
                <img src={right} style={{ width: '25px', height: '25px' }} />
                </RightButton>
            </>
        )
    }
}

export default Slider;