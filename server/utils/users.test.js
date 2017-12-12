const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;
    var Mike, Jen, Anna;

    beforeEach(() => {
        users = new Users();

        Mike = {
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        };

        Jen = {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        };

        Anna = {
            id: '3',
            name: 'Anna',
            room: 'Node Course'
        };

        users.users = [Mike, Jen, Anna];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Srulik',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var user = users.removeUser('1');
        expect(user.id).toBe('1');
        expect(users.users).toEqual([Jen, Anna]);
    });

    it('should not remove user', () => {
        var user = users.removeUser('4');
        expect(user).toNotExist();
        expect(users.users).toEqual([Mike, Jen, Anna]);
    });

    it('should find user', () => {
        var user = users.getUser('1');
        expect(user).toEqual(Mike);
    });

    it('should not find user', () => {
        var user = users.getUser('4');
        expect(user).toNotExist();
    });

    it('should return names for node course', () => {
       var userList = users.getUserList('Node Course');

       expect(userList).toEqual(['Mike', 'Anna']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });
});