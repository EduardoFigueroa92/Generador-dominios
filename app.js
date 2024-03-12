let pronouns = ["the", "our"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon"];
let extensions = [".com", ".es", ".net", ".us"];

for (x of pronouns) {
  for (y of adjs) {
    for (z of nouns) {
      for (n of extensions) {
        console.log(x + y + z + n);
      }
    }
  }
}
