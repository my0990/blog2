import BoardTemplate from "../components/board/BoardTemplate";
import BoardForm from "../components/board/BoardForm";

const Board = () => {
    return(
        <BoardTemplate>
            <BoardForm title="게시판1"></BoardForm>
            <BoardForm title="게시판2"></BoardForm>
        </BoardTemplate>
    )
}

export default Board;