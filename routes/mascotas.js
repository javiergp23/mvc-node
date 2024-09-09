import express from 'express';

const route = express.Router();

route.post('/');
route.get('/:id');
route.put('/:id');
route.delete('/:id');

