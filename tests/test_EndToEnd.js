describe('Test express', function() {

    beforeEach(function() {
        driver = browser.driver;
        driver.ignoreSynchronization = false;
        params = browser.params;
        this.url = 'http://localhost:8001';

    });

    it('Asynchronous test', function() {
        driver.get(this.url);

        driver.findElements(by.css('.email')).
            then(function(elems) {
                expect(elems.length).toEqual(3);
            }
        );

        driver.findElements(by.tagName('h2')).
            then(function(elems) {
                expect(elems.length).toEqual(3);
            }
        );

        driver.findElement(by.css('.boton')).click();

        /*driver.findElements(by.id('link')).
            then(function(elems) {
                elems[0].click();
            }
        );*/


        driver.findElements(by.css('.detail')).
            then(function(elems) {
                expect(elems.length).toEqual(1);
            }
        );

    });

    it('Asynchronous test',function() {
        driver.get(this.url).
            then(function() {
                driver.findElements(by.css('.email')).
                    then(function(elems) {
                        expect(elems.length).toEqual(3);
                    }
                );
            }).
            then(function() {
                driver.findElements(by.tagName('h2')).
                    then(function(elems) {
                        expect(elems.length).toEqual(3);
                    }
                );
            }).
            then(function() {
                driver.findElement(by.css('.boton')).click();;
            }).
            then(function() {
                driver.findElements(by.css('.detail')).
                    then(function(elems) {
                        expect(elems.length).toEqual(1);
                    }
                );
            });

    });

    it('get title', function() {
        driver.get(this.url).
            then(function() {
                driver.getTitle().
                    then(function(title) {
                        expect(title).toEqual("Jade Example");
                    });
            });
    });

    it('get params', function() {
        var user = params.login.user;
        var password = params.login.password;
        expect(user).toEqual("sebas");
        expect(password).toEqual("seb2001");
    });

    it('formulario',function() {
        driver.get(this.url).
            then(function() {
               driver.findElement(by.id('link')).click();
            }).
            then(function() {
                driver.findElements(by.tagName('h1')).
                    then(function(elems) {
                        expect(elems.length).toEqual(1);
                        elems[0].getText().then(function(value) {
                           expect(value).toEqual('Autor');
                        });
                    });
            }).
            then(function() {
                driver.findElement(by.name('nombre')).sendKeys(params.autor.nombre);
                driver.findElement(by.name('apellido')).sendKeys(params.autor.apellidos);
                driver.findElement(by.name('nombre')).getAttribute('value').
                    then(function(value) {
                        expect(value).toEqual(params.autor.nombre);
                    });
                driver.findElement(by.name('apellido')).getAttribute('value').
                    then(function(value) {
                        expect(value).toEqual(params.autor.apellidos);
                    });
            }).
            then(function() {
                driver.findElement(by.id('add')).click();
            }).
            then(function() {
                driver.findElements(by.css('h1')).
                    then(function(elems) {
                        expect(elems.length).toEqual(1);
                        elems[0].getText().then(function(value) {
                           expect(value).toEqual('Datos');
                        });
                    });
            }).
            then(function() {
                driver.findElements(by.css('.label')).
                    then(function(elems) {
                        expect(elems.length).toEqual(4);
                    });
            }).
            then(function() {
                driver.findElement(by.id('nombre')).getText().
                    then(function(value) {
                       expect(value).toEqual(params.autor.nombre);
                    });
            }).
            then(function() {
                driver.findElement(by.id('apellidos')).getText().
                    then(function(value) {
                       expect(value).toEqual(params.autor.apellidos);
                    });
            });
    });
});
