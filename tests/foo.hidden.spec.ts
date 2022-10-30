import { Foo } from '../foo'

const foo = new Foo();

describe("Foo Hidden Test", () => {

    describe("calculate", () => {

        it("hidden test 1 ...", () => {
            expect(foo.calculate(2)).toEqual(2);
        });

    });

});
