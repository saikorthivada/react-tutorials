import React, { useState } from 'react'

function CodeReviewFeedback() {

    const [list, setList] = useState([
        {
            label: "Readability",
            key: 1,
            upvote: 0,
            downvote: 0
        },
        {
            label: "Performance",
            key: 2,
            upvote: 0,
            downvote: 0
        },
        {
            label: "Security",
            key: 3,
            upvote: 0,
            downvote: 0
        },
        {
            label: "Documentation",
            key: 4,
            upvote: 0,
            downvote: 0
        },
        {
            label: "Testing",
            key: 5,
            upvote: 0,
            downvote: 0
        },
    ]);

    const handleVote = (index, key) => {
        list[index][key] += 1;
        setList([...list]);
    }
    return (
        <div className='d-flex justify-content-center' style={{columnGap: "10px", rowGap: "10px", flexWrap: "wrap"}}>
            {
                list.map((aspect, index) => {
                    return <div className="card" style={{ width: "18rem" }} key={aspect.key}>
                        <div className="card-body">
                            <h5 className="card-title">{aspect.label}</h5>
                            <div className='d-flex'>
                                <button className='btn btn-outline-primary' onClick={() => handleVote(index, "upvote")}>Upvote</button>&nbsp;
                                <button className='btn btn-outline-danger' onClick={() => handleVote(index, "downvote")}>Downvote</button>
                            </div>
                            <div>
                                <p className='m-0'><strong>Upvote:</strong>{aspect.upvote}</p>
                                <p className='m-0'><strong>Downvote:</strong>{aspect.downvote}</p>
                            </div>
                        </div>
                    </div>
                })
            }

        </div>
    )
}

export default CodeReviewFeedback