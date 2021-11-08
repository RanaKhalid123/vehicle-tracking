let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server');
let should = chai.should();
chai.use(chaiHttp);

describe('Unit Testing of Vehicle Tracking',() => {

    //Registering few vehicles
    it('Should register a new vehicle ', (done) => {
        const vehicleObj = { name: "Honda Civic", deviceId: (1).toString(), model: (Math.floor(Math.random() * 1000000000) + 1).toString()}
          chai.request(app)
            .post('/api/vehicle/register')
            .send(vehicleObj)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                done();
            });
    });

    it('Should register a new vehicle ', (done) => {
        const vehicleObj = { name: "Honda Civic", deviceId: (2).toString(), model: (Math.floor(Math.random() * 1000000000) + 1).toString()}
          chai.request(app)
            .post('/api/vehicle/register')
            .send(vehicleObj)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                done();
            });
    });

    it('Should register a new vehicle ', (done) => {
        const vehicleObj = { name: "Honda Civic", deviceId: (3).toString(), model: (Math.floor(Math.random() * 1000000000) + 1).toString()}
          chai.request(app)
            .post('/api/vehicle/register')
            .send(vehicleObj)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                done();
            });
    });

    it('Should register a new vehicle ', (done) => {
        const vehicleObj = { name: "Honda Civic", deviceId: (4).toString(), model: (Math.floor(Math.random() * 1000000000) + 1).toString()}
          chai.request(app)
            .post('/api/vehicle/register')
            .send(vehicleObj)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                done();
            });
    });
    

    //getting all registered vehicles
    it('Should fetch all registered vehicle', (done) => {
          chai.request(app)
            .get('/api/vehicle/all-vehicles')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    //fetching specific vehicle's locations between two dates
    it('Should fetch locations of specified vehicle between two dates', (done) => {
        chai.request(app)
          .get('/api/vehicle/vehicle-position/'+`${1}/${new Date("01-01-1970")}/${new Date("01-01-2070")}`)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              done();
          });
    });

    //fetching specific vehicle's locations between two dates
    it('Should fetch locations of specified vehicle between two dates', (done) => {
        chai.request(app)
          .get('/api/vehicle/vehicle-position/'+`${2}/${new Date("01-01-1970")}/${new Date("01-01-2070")}`)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              done();
          });
    });

    //updating vehicle's location between two dates
    it('Should update vehicles current location', (done) => {
        const vehicleLocationObj = {vehicleId: 1,deviceId: 1,lat: 40.717274,long: -74.008987}
        chai.request(app)
          .post('/api/vehicle/update-position')
          .send(vehicleLocationObj)
          .end((err, res) => {
              res.should.have.status(201);
              res.body.should.be.a('object');
              done();
          });
    });

    //updating vehicle's location between two dates
    it('Should update vehicles current location', (done) => {
        const vehicleLocationObj = {vehicleId: 2,deviceId: 2,lat: 40.717274,long: -74.008987}
        chai.request(app)
          .post('/api/vehicle/update-position')
          .send(vehicleLocationObj)
          .end((err, res) => {
              res.should.have.status(201);
              res.body.should.be.a('object');
              done();
          });
    });

    //updating vehicle's location between two dates
    it('Should update vehicles current location', (done) => {
        const vehicleLocationObj = {vehicleId: 3,deviceId: 3,lat: 40.717274,long: -74.008987}
        chai.request(app)
          .post('/api/vehicle/update-position')
          .send(vehicleLocationObj)
          .end((err, res) => {
              res.should.have.status(201);
              res.body.should.be.a('object');
              done();
          });
    });

     //updating vehicle's location between two dates
     it('Should update vehicles current location', (done) => {
        const vehicleLocationObj = {vehicleId: 4,deviceId: 4,lat: 40.717274,long: -74.008987}
        chai.request(app)
          .post('/api/vehicle/update-position')
          .send(vehicleLocationObj)
          .end((err, res) => {
              res.should.have.status(201);
              res.body.should.be.a('object');
              done();
          });
    });

});