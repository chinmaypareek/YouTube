import { USERICON } from "../utils/constants";

const commentsData = [
  {
    name: "Chinmay Pareek",
    text: "Hey this is a comment. Whats' up?",
    replies: [],
  },
  {
    name: "Chinmay Pareek",
    text: "Hey this is a comment. Whats' up?",
    replies: [
      {
        name: "Chinmay Pareek",
        text: "Hey this is a comment. Whats' up?",
        replies: [
          {
            name: "Chinmay Pareek",
            text: "Hey this is a comment. Whats' up?",
            replies: [],
          },
        ],
      },
      {
        name: "Chinmay Pareek",
        text: "Hey this is a comment. Whats' up?",
        replies: [
          {
            name: "Chinmay Pareek",
            text: "Hey this is a comment. Whats' up?",
            replies: [
              {
                name: "Chinmay Pareek",
                text: "Hey this is a comment. Whats' up?",
                replies: [
                  {
                    name: "Chinmay Pareek",
                    text: "Hey this is a comment. Whats' up?",
                    replies: [
                      {
                        name: "Chinmay Pareek",
                        text: "Hey this is a comment. Whats' up?",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Chinmay Pareek",
    text: "Hey this is a comment. Whats' up?",
    replies: [],
  },
  {
    name: "Chinmay Pareek",
    text: "Hey this is a comment. Whats' up?",
    replies: [
      {
        name: "Chinmay Pareek",
        text: "Hey this is a comment. Whats' up?",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img className="w-12 h-12" alt="user" src={USERICON} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

function CommentsContainer() {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold py-2">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
}

export default CommentsContainer;
