const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

//Agregar usuario que no estaba en la lista
test('add user that is not in the list', () => {    
    let user = new User(9999,"Ferrer", "ferrer@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });


// Usuario que no esta en la lista
test('remove user that is not in the list', () => {    
    let user = new User(8888,"Ghost", "ghost@generation.org");
    let initialLength = userController.getUsers().length;
    userController.remove(user);
    expect(userController.getUsers().length).toBe(initialLength);
  });

  //caso exitoso
test('find user by email not found', () => {    
    let user = new User(1, "Anna", "anna@generation.org");
    userController.add(user);    
    let result = userController.findByEmail("anna@generation.org");
    expect(result).toBe(user);
  });

  //Email no encontrado
test('find user by email not found', () => {    
    let result = userController.findByEmail("noexiste@generation.org");
    expect(result).toBeUndefined();
  });

  //ID encontrado caso exitoso
test('find user by id', () => {    
    let user = new User(2, "Luis", "luis@generation.org");
    userController.add(user);
    let result = userController.findById(2);
    expect(result).toBe(user);
  });

  //Id no encontrado
test('find user by id not found', () => {    
    let result = userController.findById(999);
    expect(result).toBeUndefined();
  });
  
