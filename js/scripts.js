var wordOrder = function (words) {
  var wordList = words.split(/\W/);
  var uniqueWords = [];
  var hash = {};
  var counts = []

  var count = function(word) {
    count = 0;
    for (var i = 0; i < wordList.length; i++) {
      if (word === wordList[i]) {
        count += 1;
      };
    }
    return {word: count};
  };

  wordList.forEach(function(word) {
    if (uniqueWords.indexOf(word) < 0) {
      uniqueWords.push(word);
    }
  })

  var counts = uniqueWords.map(count);

  for (var e in uniqueWords) {
    for (var i in counts) {
      hash[uniqueWords[e]] = counts[i];
    }
  };

  return hash;
};
