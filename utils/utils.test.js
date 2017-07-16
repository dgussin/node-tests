const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
   
    expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    var res = utils.square(3);
    
    expect(res).toBe(9).toBeA('number');
});

it('should async square a number', (done) => {
    utils.asyncSquare(3, (square) => {
        expect(square).toBe(9).toBeA('number');
        done();
    });
});

// should verify first and lastname are set
// assert it includes firstName and LastName with proper values

it('should set both the first and last name on the user object', () => {
    var firstName = 'Darren';
    var lastName = 'Gussin';
    var user = {
        age: 49,
        location: 'Farmington Hills'
    };

    var res = utils.setName(user, `${firstName} ${lastName}`);

    expect(res).toInclude({
        firstName,
        lastName
    });
});


// it('should expect some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//     // expect({name: 'Andrew'}).toNotEqual({name: 'andrew'});
//     // expect([2,3,4]).toInclude(2);
//     // expect([2,3,4]).toExclude(1);
//     // expect({
//     //     name: 'Andrew',
//     //     age: 25,
//     //     location: 'Philadelphia'
//     // }).toExclude({
//     //     age: 23
//     // });

// });