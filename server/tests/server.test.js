const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');
const {app} = require('./../server'); //ES6 destructuring
const {Todo} = require('./../models/todo');

const todos = [{
  text: 'f test 1'
},{
  text: 's test 2'
}];

beforeEach((done) => {
  Todo.remove({}).then(() => {

    return Todo.insertMany(todos);
  }).then(() => done());// passing a empty object is gona wipe our todos
});

describe('POST /todos', () => {
  it('it should create a new todo', (done) => { //callback function with done argument
    var text = 'Test todo text';

    request(app)
      .post('/todos')// in order to send data with the request we call .send
      .send({text}) // ES6 sintax, this object is going to be converted to JSON by supertest
      .expect(200)
      .expect((res) => { //custom expect
        expect(res.body.text).toBe(text);
      })
      .end((error, res) => {
        if(error) {
          return done(error); /// returning done stops function execution
        }
        Todo.find({text}).then((todos) => {// then callback
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((error) => done(error));//catch is gona get any errors that ocurred in our callback
      });//statement sintax on the last line, passing error to done
      //war. set the scripts in package.json
    });
      it('should not create todo with invalid body data', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((error, res) => {
        if(error){
          return done(error);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((error) => done(error));
      });

  });

});

describe('GET /todos', () => {
    it('should get all todos', (done) => {
      request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
          expect(res.body.todos.length).toBe(2);
      })
      .end(done);
    });
});

describe('GET /todos/:id', () => {
  it('should return todo doc', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });

  it('should return 404 if todo not found', (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .get(`/todos/${hexId}`)
      .expect(404)
      .end(done);
  });

  it('should return 404 for non-object ids', (done) => {
    request(app)
      .get('/todos/123abc')
      .expect(404)
      .end(done);
  });
});
