// useState,useEffectを追加（reacthooksの標準機能）
import React, { useState, useEffect } from "react";

const Booklist = (props) => {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const result = props
      .getData?.(props.language)
      .then((response) => setBookData(response));
  }, [props]);
  console.log(bookData);

  return (
    <div>
      <ul>
        {bookData === null ? (
          <p>now Loading...</p>
        ) : (
          bookData.data.items.map((x, index) => (
            <li key={index}>
              {x.volumeInfo.title} <br />
              {x.volumeInfo.authors} <br />
              <img src={x.volumeInfo.imageLinks?.smallThumbnail} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Booklist;
