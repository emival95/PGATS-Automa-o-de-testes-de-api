const request = require('supertest');
const sinon = require('sinon');const { expect } = require('chai');

// Aplicação


//mock


// Testes
describe('Transfer', () => {
    describe('POST /transfer', () => {
        it('Quando informo remetente e destinatario inexistentes recebo 400', async () => {
            const resposta = await request('http://localhost:3000') // Assuming your app runs on port 3000
                .post('/transfer')
                .send({
                    from:"emival",
                    to:"valzin",
                    value:100

                });
             expect(resposta.status).to.equal(400);
             expect(resposta.body).to.property('error', 'Usuário não encontrado');
             
        });
    });
    });