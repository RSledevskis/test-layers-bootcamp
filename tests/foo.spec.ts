import { Foo } from '../foo'

const foo = new Foo();

describe("Foo Test", () => {

    describe("calculate", () => {

        it("test 1 ...", () => {
            expect(foo.calculate(1)).toEqual(1);
        });

    });

});
