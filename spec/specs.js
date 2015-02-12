describe('wordOrder', function() {
  it('takes a word and returns 1', function() {
    expect(wordOrder('world')).to.eql({'world':1});
  });

  it('takes two words in a string and returns count of 1 for each', function() {
    expect(wordOrder('hello world')).to.eql({'hello': 1, 'world': 1});
  });

  it('takes two same words in a string and returns its count of 2', function () {
    expect(wordOrder('hello hello')).to.eql({'hello': 2});
  });
});
