import { checkHP } from "../app";

test("testing different values of HP", () => {
    const mage = {name: "mage", health: 90};
    const warrior = {name: "warrior", health: 10};
    const warlock = {name: "warlock", health: 35};

    expect(checkHP(mage)).toEqual("healthy");
    expect(checkHP(warrior)).toEqual("critical");
    expect(checkHP(warlock)).toEqual("wounded");
});