
function tempConverter(fahr) {
    valFahr = parseFloat(fahr);
    num = (5 / 9) * (fahr - 32);
    return num;
}
QUnit.test("tempConverter", function(assert){
    assert.equal(tempConverter(5),-15);
    assert.equal(tempConverter(14),-10);
    assert.equal(tempConverter(23),-5);
    assert.equal(tempConverter(32),0);
    assert.equal(tempConverter(41),5);
})