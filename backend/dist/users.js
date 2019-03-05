"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    'isabele@gmail.com': new User('isabele@gmail.com', 'Isabele', '123'),
    'joao@gmail.com': new User('joao@gmail.com', 'Joao', '1234')
};
