import React from "react";

export default function form({ value, btnSubmit, setValue }) {
  //2.textChange함수
  const textChange = (e) => {
    //console.log('e', e.target.value)
    setValue(e.target.value);
  };

  return (
    <div>
      <form style={{ display: "flex" }} onSubmit={btnSubmit}>
        <input className="write" type="text" name="value" placeholder="해야할 일을 입력하세요" onChange={textChange} value={value} autoComplete="off" />
        <input className="submit" type="submit" value="입력" />
      </form>
    </div>
  );
}
