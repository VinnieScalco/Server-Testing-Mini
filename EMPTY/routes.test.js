const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const chai = require('chai');
const chaiHTTP = require('chai-http');
const expect = chai.expect();

const server = require('./server');
chai.use(chaiHTTP);
