

const CommentBox = ({data}) => {

    return data.map((comment, index) => {
        return (
            <div className="border-l border-black">
                <div className="flex p-2" key={index}>
                    <img 
                        className="w-12 h-12 p-2 rounded-full"
                        src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png"
                        alt='user'
                    />
                    <div>
                        <p className="font-bold">{comment.username}</p>
                        <p>{comment.comment}</p>
                    </div>
                </div>

                {comment?.replies?.length>0 &&
                    <div className="ml-10">
                        {/* <p className="italic">Replies-</p> */}
                        <CommentBox data={comment.replies}/>
                    </div>
                }
            </div>
            
        );
    })
}

export default CommentBox;