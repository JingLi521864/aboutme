function mathMax(first, second) {
    first = Number(document.getElementById("first").value)

    second = Number(document.getElementById("second").value)

    value = Math.max(first, second);

    document.getElementById("value").innerHTML = Math.max(first, second);
}
QUnit.test("mathMax",function(assert)){
    assert.max(mathMax(10,20));
    assert.max(mathMax(-29,0));
    assert.max(mathMax(100,500));
    assert.max(mathMax(89,-100));
    assert.max(mathMax(-1,-20));

}