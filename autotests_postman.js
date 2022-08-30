// autotests on some requests for https://swapi.dev/api/


pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Successful GET request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201, 202]);
});

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("temperate");
});

pm.test('Test variables', function () {
    pm.expect(pm.variables.get("host")).to.eq("https://swapi.dev/api");
});
