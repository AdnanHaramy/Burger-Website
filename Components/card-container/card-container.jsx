import React from 'react';
import '../card-container/card-container.scss'
import Card from '../card/card';
class CardContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            cards: [
                {
                    title: 'Development',
                    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80',
                    id: 1,
                },
                {
                    title: 'Research & Analysis',
                    imageUrl: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
                    color: 'green',
                    id: 2,
                },
                {
                    title: 'UI/UX',
                    imageUrl: 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2788&q=80',
                    color: 'orange',
                    id: 3,
                },

            ],
        }
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.cards.map(card => (
                        <Card
                            key={card.id}
                            title={card.title}
                            imageUrl={card.imageUrl}
                            color={card.color}
                        />
                    ))
                }
            </React.Fragment>
        );
    }
}



export default CardContainer;