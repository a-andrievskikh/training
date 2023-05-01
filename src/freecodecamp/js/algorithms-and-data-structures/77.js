function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case "a":
      answer = "apple";
      return answer;
      break;
    case "b":
      answer = "bird";
      return answer;
      break;
    case "c":
      answer = "cat";
      return answer;
      break;
    default:
      answer = "stuff";
      return answer;
      break;
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);
