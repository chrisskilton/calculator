const path = require('path');
const Application = require('spectron').Application;

describe('application launch', () => {
    beforeEach(() => {
        this.app = new Application({
            path: './node_modules/.bin/electron',
            args: [path.resolve(__dirname, '../main.js')]
        });

        return this.app.start();
    });

    afterEach(() => {
        if (this.app && this.app.isRunning()) {
            return this.app.stop();
        }
    });

    describe('layout', () => {
        it('shows an initial window', () => {
            return this.app.client.getWindowCount().then((count) => {
                expect(count).toEqual(1);
            });
        });

        describe('display', () => {
            it('should render display showing 0', () => {
                return this.app.client.getText('.display span')
                    .then(text => {
                        expect(text).toEqual('0');
                    });
            });
        });

        describe('number pad', () => {
            it('should render numbers 0-9 and decimal place', () => {
                let promises = [];

                for (let i = 0; i < 10; i++) {
                    promises.push(this.app.client.getText(`#numpad-${i.toString()}`));
                }

                promises.push(this.app.client.getText('#numpad-decimal'))

                return Promise.all(promises)
                    .then(results => {
                        expect(results).toEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']);
                    })
            });
        });

        describe('operator pad', () => {
            it('should render +, -, % and * operators', () => {
                let promises = ['add', 'subtract', 'divide', 'multiply'].map(op => {
                    return this.app.client.getText(`#padbutton-${op}`);
                });

                return Promise.all(promises)
                    .then(results => {
                        expect(results).toEqual(['+', '-', '%', '*']);
                    })
            });
        });

        describe('executor pad', () => {
            it('should render C and = executors', () => {
                let promises = ['equals', 'clear'].map(ex => {
                    return this.app.client.getText(`#padbutton-${ex}`);
                });

                return Promise.all(promises)
                    .then(results => {
                        expect(results).toEqual(['=', 'C']);
                    })
            });
        });
    });

    describe('addition', () => {
        it('should be able to add numbers', () => {
            return this.app.client.element('#numpad-5').click()
                .then(() => this.app.client.element('#padbutton-add').click())
                .then(() => this.app.client.element('#numpad-7').click())
                .then(() => this.app.client.element('#padbutton-equals').click())
                .then(() => this.app.client.getText('.display span'))
                .then(result => expect(result).toEqual('12'));
        });
    });

    describe('subtraction', () => {
        it('should be able to subtract numbers', () => {
            return this.app.client.element('#numpad-9').click()
                .then(() => this.app.client.element('#padbutton-subtract').click())
                .then(() => this.app.client.element('#numpad-4').click())
                .then(() => this.app.client.element('#padbutton-equals').click())
                .then(() => this.app.client.getText('.display span'))
                .then(result => expect(result).toEqual('5'));
        });
    });

    describe('division', () => {
        it('should be able to divide numbers', () => {
            return this.app.client.element('#numpad-6').click()
                .then(() => this.app.client.element('#numpad-0').click())
                .then(() => this.app.client.element('#padbutton-divide').click())
                .then(() => this.app.client.element('#numpad-2').click())
                .then(() => this.app.client.element('#padbutton-equals').click())
                .then(() => this.app.client.getText('.display span'))
                .then(result => expect(result).toEqual('30'));
        });
    });

    describe('multiplication', () => {
        it('should be able to multiply numbers', () => {
            return this.app.client.element('#numpad-8').click()
                .then(() => this.app.client.element('#numpad-2').click())
                .then(() => this.app.client.element('#padbutton-multiply').click())
                .then(() => this.app.client.element('#numpad-3').click())
                .then(() => this.app.client.element('#padbutton-equals').click())
                .then(() => this.app.client.getText('.display span'))
                .then(result => expect(result).toEqual('246'));
        });
    });

    describe('clear', () => {
        it('should be able to clear the display', () => {
            return this.app.client.element('#numpad-8').click()
                .then(() => this.app.client.element('#numpad-9').click())
                .then(() => this.app.client.element('#numpad-7').click())
                .then(() => this.app.client.element('#padbutton-clear').click())
                .then(() => this.app.client.getText('.display span'))
                .then(result => expect(result).toEqual('0'));
        });
    });
});
