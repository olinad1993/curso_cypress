/// <reference types="cypress"/>

it('Equality',() => {
    const a = 1

    expect(a).equal(1);
    expect(a, 'Deve ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b');
})


it('Truth', () =>{
    const a = true;
    const b = null;

    expect(a).to.be.true;
    expect(true).to.be.true;
})