import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "../styles/mainStyle.css";

function Star({ stars, reviews }) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="starIcon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="starIcon" />
        ) : (
          <AiOutlineStar className="starIcon" />
        )}
      </span>
    );
  });

  return (
    <>
      <div>
        {ratingStar}
        <p>({reviews} customer reviews)</p>
      </div>
    </>
  );
}

export default Star;
