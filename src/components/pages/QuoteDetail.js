import React, {Fragment} from 'react';
import {useParams, Route, Link, useRouteMatch} from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import NotFound from "./NotFound";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Nastya', text: 'Learning React is fun !'},
    {id: 'q2', author: 'Anastasiia', text: 'Learning React is great !'},
];

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)
    if (!quote)
        return (
            <NotFound/>
        )
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;