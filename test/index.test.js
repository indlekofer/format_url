import assert from 'assert';

import formatUrl from '../src/index';
describe('format_url', () => {
  it('with query string parameter', () => {
    assert.equal(
      formatUrl("http://localhost:8080/", "test=1&test2=2"),
      "http://localhost:8080/?test=1&test2=2"
    );
  });
  it('with query string parameter append', () => {
    assert.equal(
      formatUrl("http://localhost:8080/?xa=ux", "test=1&test2=2"),
      "http://localhost:8080/?xa=ux&test=1&test2=2"
    );
  });
  it('with undefined query parameter append', () => {
    assert.equal(
      formatUrl("http://localhost:8080/?xa=ux", undefined),
      "http://localhost:8080/?xa=ux"
    );
  });
  it('with query object parameter', () => {
    assert.equal(
      formatUrl("http://localhost:8080/", {test: 1, test2: 2}),
      "http://localhost:8080/?test=1&test2=2"
    );
  });
  it('with query object parameter and hash', () => {
    assert.equal(
      formatUrl("http://localhost:8080/", {test: 1, test2: 2}, 'asdasd'),
      "http://localhost:8080/?test=1&test2=2#asdasd"
    );
  });
});
