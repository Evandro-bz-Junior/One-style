import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import './Faq.scss'

function Faq() {
    return (
        <div className='faq'>

            <div className="faq-title">
                <hr />
                <h1>Duvidas</h1>
                <hr />
            </div>

            <div className="questions-area">

                <div className="info-area">
                    <h4>Perguntas Frequentes</h4>
                    <span>Aqui você encontra respostas para as perguntas mais comuns sobre nossos produtos e serviços.</span>
                </div>

                <div className="accordions-area">
                    <div className="accordion">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header" className='accordion-title'
                            >
                                Sobre pagamento.
                            </AccordionSummary>
                            <AccordionDetails className='accordion-details'>
                                Aceitamos pagamento via pix, link de pagamento, Cartões. Dividimos em 4x sem juros.
                                <br />
                                Reservas somente mediante pagamento.
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className="accordion">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                className='accordion-title'
                            >
                                Entregas e Envio.
                            </AccordionSummary>
                            <AccordionDetails className='accordion-details'>
                                <ul>
                                    <li>Fazemos entrega grátis a partir de <strong>UMA</strong> peça nos bairros centrais (Nova Betânia, Centro, Boa Vista, Abolição 1 e Doze Anos).</li>
                                    <li>Demais bairros: entrega grátis a partir de <strong>DUAS</strong> peças.</li>
                                    <li>Para entrega de uma peça, o valor da entrega é fixo: <strong>R$ 10,00</strong>.</li>
                                    <li>Prazo para entrega: até <strong>72 horas</strong> após a compra.</li>
                                    <li>Não entregamos no Nova Mossoró e Cidade Oeste.</li>
                                    <li>Possuímos um endereço disponível para retirada, caso prefiram.</li>
                                    <li>Enviamos para todo o Brasil, o custo de envio será do cliente.</li>
                                    <li>Temos política de redução de fretes de envio. Consulte seu CEP.</li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className="accordion">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header" className='accordion-title'
                            >
                                Troca e Devolução.
                            </AccordionSummary>
                            <AccordionDetails className='accordion-details'>
                                <ul>
                                    <li>O frete de troca é por conta do cliente.</li>
                                    <li>O prazo para solicitar a troca da compra ou do produto é de até <strong>7 dias corridos</strong>, a partir do dia seguinte ao recebimento do pedido.</li>
                                    <li>A troca só será feita se o produto estiver em perfeitas condições, como saiu do estoque:</li>
                                    <ul>
                                        <li>Produto na embalagem original;</li>
                                        <li>Com as etiquetas;</li>
                                        <li>Sem sinais de uso.</li>
                                    </ul>
                                    <li>Os produtos serão analisados e, caso não estejam de acordo com as condições mencionadas, não serão trocados.</li>
                                    <li>O prazo para troca pode variar de acordo com a região do cliente.</li>
                                    <li>De acordo com o artigo 49 do Código de Defesa do Consumidor, o cliente pode devolver o(s) produto(s) e receber o reembolso ou trocar por outro produto disponível em estoque.</li>
                                </ul>

                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className="accordion">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4-content"
                                id="panel4-header" className='accordion-title'
                            >
                                Como entro em contato com o suporte ao cliente?
                            </AccordionSummary>
                            <AccordionDetails className='accordion-details'>
                                Para entrar em contato com o suporte ao cliente, você pode nos enviar uma mensagem diretamente pelo nosso Instagram{' '}
                                <a
                                    href="https://www.instagram.com/one.style_oficial/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @one.style_oficial
                                </a>{' '}
                                ou pelo WhatsApp clicando{' '}
                                <a
                                    href="https://wa.me/558498098813"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    aqui
                                </a>
                                . Estamos à disposição para esclarecer dúvidas, ajudar com pedidos ou qualquer outra necessidade! 😊

                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Faq;