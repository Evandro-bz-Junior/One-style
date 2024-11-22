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
                                Qual é o prazo de entrega?
                            </AccordionSummary>
                            <AccordionDetails className='accordion-details'>
                                O prazo de entrega varia de acordo com a sua localização.
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
                                Quais são as opções de pagamento?
                            </AccordionSummary>
                            <AccordionDetails className='accordion-details'>
                                Aceitamos pagamentos por cartão de crédito, débito e Pix.
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
                                Posso trocar ou devolver um produto?
                            </AccordionSummary>
                            <AccordionDetails className='accordion-details'>
                                Sim, você pode trocar ou devolver um produto seguindo a política de trocas e devoluções. Para iniciar o processo, entre em contato conosco pelo nosso Instagram{' '}
                                <a
                                    href="https://www.instagram.com/one.style_oficial/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @one.style_oficial
                                </a>{' '}
                                ou pelo WhatsApp{' '}
                                <a
                                    href="https://wa.me/558498098813"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    clicando aqui
                                </a>
                                .
                                Lembre-se de que o produto deve estar nas mesmas condições em que foi recebido, sem sinais de uso. Estamos à disposição para ajudá-lo(a) em cada etapa! 😊

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