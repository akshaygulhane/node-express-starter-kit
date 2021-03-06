const nock = require('nock');

const getRandomUserOfNationality = n =>
  fetch(`https://randomuser.me/api/?nat=${n}`)
    .then(throwNon200)
    .then(res => res.json())
    .catch(e => console.log(e));

    it('should return a user', () => {
  
        nock('https://randomuser.me')
          .get('/api/')
          .reply(200, {
            results: [{ name: 'Dominic' }],
          });
        return query
          .getRandomUser()
          .then(res => res.results[0].name)
          .then(res => expect(res).toEqual('Dominic'));
      });

      console.log(getRandomUserOfNationality());