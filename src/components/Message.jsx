function Message() {
  function handleClick() {
    console.log("button clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default Message;
