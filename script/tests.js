function mathMax(first, second) {
    first = Number(document.getElementById("first").value)

    second = Number(document.getElementById("second").value)

    value = Math.max(first, second);

    
}
QUnit.test("mathMax",function(assert){
    assert.max(mathMax(-10,-20));
    assert.max(mathMax(10,20));
    assert.max(mathMax(-2,9));
    assert.max(mathMax(100,20));
    assert.max(mathMax(8,-9));
})