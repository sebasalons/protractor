/**
 * Created by sebas on 2/5/17.
 */

describe('Test express', function() {
    beforeEach(function () {
        driver = browser.driver;
        driver.ignoreSynchronization = true;
        params = browser.params;
        this.url = params.home.url;
        driver.get(this.url);
    });

    it('formulario',function() {
        driver.findElement(by.id('tabVUE')).
            then(function(element) {
                expect(element.getText()).not.toBe(null);
        }).then(function(){
            driver.findElement(by.id('origen_vue')).sendKeys(params.home.origin);
            driver.findElement(by.id('destino_vue')).sendKeys(params.home.destination);

        }).then(function() {
            driver.findElement(by.id('pasajeros_vue')).getAttribute('value').
                then(function(value) {
                    expect(value).toEqual(params.home.passengers);
                });
        }).then(function() {
            driver.findElement(by.css('a[href*="search_VUE_class_and_discounts"]')).
                then(function(element) {
                    expect(element.getText()).not.toBe(null);
                });
        }).then(function() {
            driver.findElement(by.id('li_ida')).click();
        }).then(function() {
            driver.findElement(by.id('div_fecha_vuelta_vue')).getAttribute('class').
                then(function(classes) {
                    expect(classes.split(' ').indexOf('disabled')).not.toEqual(-1);
            });
        });
    });

});