import useDetail from './useHook';

// 기한이 지났을경우에 참가버튼이 참가하지 못하는 버튼으로 바뀌게
//useEffect 같은 경우는 get 호출할때만 사용된다.
const Detail = () => {
    const { data, start_time, end_time, isWriter, handleDelete, handleUpdate } =
        useDetail();

    console.log(data);
    const validate = () => {
        if (isWriter === true) {
            return (
                <div>
                    <button onClick={handleUpdate}>수정하기</button>
                    <button onClick={handleDelete}>삭제하기</button>
                </div>
            );
        } else if (isWriter === null) {
            return null;
        }
    };

    return (
        <>
            <img
                src={`${data?.result?.img_link}`}
                width='1000'
                height='500'
            ></img>
            <div>
                <p>공식 챌린지</p>
                <p>{data?.result?.title}</p>
                <p>매일</p>
                <p>
                    {start_time} ~ {end_time}
                </p>
                {validate()}
            </div>
        </>
    );
};

export default Detail;
