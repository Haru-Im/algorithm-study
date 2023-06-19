function solution(new_id) {
  var answer = "";
  //1.
  new_id = new_id.toLowerCase();
  //2.
  new_id = new_id.replace(/[^\w\-\.]/g, "");
  //3.
  new_id = new_id.replace(/\.{2,}/g, ".");
  //4.
  new_id = new_id.replace(/^\./, "");
  new_id = new_id.replace(/\.$/, "");
  //5.
  new_id = new_id.length === 0 ? "a" : new_id;
  //6.
  new_id = new_id.slice(0, 15);
  new_id = new_id.replace(/\.$/, "");
  //7.
  while (new_id.length < 3) {
    new_id += new_id[new_id.length - 1];
  }
  return new_id;
}
