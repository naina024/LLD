// import React from 'react';
import CommentBox from './CommentBox';

const data = [
    {
        username: 'NG',
        comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
        replies: [
            {
                username: 'Leo',
                comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
                replies: []  
            }
        ]
    },
    {
        username: 'AG',
        comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
        replies: []
    },
    {
        username: 'Leo',
        comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
        replies: [
            {
                username: 'NG',
                comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
                replies: [
                    {
                        username: 'AG',
                        comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
                        replies: [
                            {
                                username: 'Leo',
                                comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
                                replies: []  
                            }
                        ]  
                    },
                    {
                        username: 'Leo',
                        comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
                        replies: []  
                    }
                ]  
            }
        ]
    }
]

const NestedComments = () => {
    return (
        <div className='absolute inset-x-1/4 my-2'>
            <CommentBox data={data}/>
        </div>
    )
}

export default NestedComments;