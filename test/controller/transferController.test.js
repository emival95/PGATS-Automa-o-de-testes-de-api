// Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

// Aplicação
const app = require('../../app');

//mock
const tranferService = require('../../service/transferService');

// Testes
describe('TransferController', () => {
    describe('POST /transfer', () => {
        it('Quando informo remetente e destinatario inexistentes recebo 400', async () => {
            const resposta = await request(app)
                .post('/transfer')
                .send({
                    from:"emival",
                    to:"valzin",
                    value:100

                });
             expect(resposta.status).to.equal(400);
             expect(resposta.body).to.property('error', 'Usuário não encontrado');
             
        });


         it('Usando Mokcs: Quando informo remetente e destinatario inexistentes recebo 400', async () => {
           // mocar apenas a função do tranfer service
           const tranferServiceMock = sinon.stub(tranferService, 'transfer');
           tranferServiceMock.throws(new Error('Usuário não encontrado'));
            const resposta = await request(app)
                .post('/transfer')
                .send({
                    from:"emival",
                    to:"valzin",
                    value:100

                });
             expect(resposta.status).to.equal(400);
             expect(resposta.body).to.property('error', 'Usuário não encontrado');

             // reseto o Mock
             sinon.restore();
             
        });

    })



        
        
});

