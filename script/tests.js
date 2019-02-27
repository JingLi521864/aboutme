function mathMax(first, second) {
    value = Math.max(first, second);
    return value

}
QUnit.test("mathMax", function (assert) {
    assert.equal(mathMax(-10, -20), -10, "Worked");
    assert.equal(mathMax(10, 20), 20, "worked");
    assert.equal(mathMax(-2, 9), 9, "worked");
    assert.equal(mathMax(100, 20), 100, "worked");
    assert.equal(mathMax(8, -9), 8, "worked");
})