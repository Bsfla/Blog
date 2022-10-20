import AddCommentContainer from "./AddCommentContainer";
import CommentList from "../../components/Comment/CommentList";
import styled from "styled-components";

const Comments = ({ comments }) => {
  console.log(comments);
  return (
    <Wrapper>
      <AddCommentContainer />
      <CommentList comments={comments} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-top: solid #ab47bc;
`;

export default Comments;
