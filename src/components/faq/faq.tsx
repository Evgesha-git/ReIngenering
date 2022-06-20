import React from "react";
import {styled} from '@mui/material/styles';
//@ts-ignore
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import AddIcon from '@mui/icons-material/Add'
import MuiAccordion, {AccordionProps} from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import './faq.css';


const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    backgroundColor: '#f9f9fb',
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<AddIcon sx={{fontSize: '22px'}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0)'
            : 'rgba(0, 0, 0, 0)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(45deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: 0,
    paddingTop: '11.5px'
}));


const Faq: React.FC = () => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div className='faq_container'>
            <div className='faq_flex'>
                <h2>Вопрос-ответ</h2>
                <div className='faq'>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            Для подачи заявления необходимо подготовить
                        </AccordionSummary>
                        <AccordionDetails>
                            <ol>
                                <li>1. Данные для авторизации в личном кабинете</li>
                                <li>2. Квалифицированный сертификат ключа
                                    проверки электронной подписи.
                                </li>
                                <li>2. Сведения, документы и материалы в соответствии
                                    с Методическими рекомендациями.
                                </li>
                                <li>4. Установить специализированное ПО для подписания
                                    документов электронной подписью. Подписание
                                    производится с использованием усиленной квалифицированной
                                    (отсоединяемой) электронной подписи.
                                </li>
                            </ol>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            Связь с оператором реестра
                        </AccordionSummary>
                        <AccordionDetails>
                            <ol>
                                <li>Данные для авторизации в личном кабинете</li>
                                <li>Квалифицированный сертификат ключа
                                    проверки электронной подписи.
                                </li>
                                <li>Сведения, документы и материалы в соответствии
                                    с Методическими рекомендациями.
                                </li>
                                <li>Установить специализированное ПО для подписания
                                    документов электронной подписью. Подписание
                                    производится с использованием усиленной квалифицированной
                                    (отсоединяемой) электронной подписи.
                                </li>
                            </ol>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            Как подать заявление на включение программного обеспечения
                            в реестр
                        </AccordionSummary>
                        <AccordionDetails>
                            <ol>
                                <li>Данные для авторизации в личном кабинете</li>
                                <li>Квалифицированный сертификат ключа
                                    проверки электронной подписи.
                                </li>
                                <li>Сведения, документы и материалы в соответствии
                                    с Методическими рекомендациями.
                                </li>
                                <li>Установить специализированное ПО для подписания
                                    документов электронной подписью. Подписание
                                    производится с использованием усиленной квалифицированной
                                    (отсоединяемой) электронной подписи.
                                </li>
                            </ol>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                            Где можно подать заявление
                        </AccordionSummary>
                        <AccordionDetails>
                            <ol>
                                <li>Данные для авторизации в личном кабинете</li>
                                <li>Квалифицированный сертификат ключа
                                    проверки электронной подписи.
                                </li>
                                <li>Сведения, документы и материалы в соответствии
                                    с Методическими рекомендациями.
                                </li>
                                <li>Установить специализированное ПО для подписания
                                    документов электронной подписью. Подписание
                                    производится с использованием усиленной квалифицированной
                                    (отсоединяемой) электронной подписи.
                                </li>
                            </ol>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                            Как узнать мне причину отказа
                        </AccordionSummary>
                        <AccordionDetails>
                            <ol>
                                <li>Данные для авторизации в личном кабинете</li>
                                <li>Квалифицированный сертификат ключа
                                    проверки электронной подписи.
                                </li>
                                <li>Сведения, документы и материалы в соответствии
                                    с Методическими рекомендациями.
                                </li>
                                <li>Установить специализированное ПО для подписания
                                    документов электронной подписью. Подписание
                                    производится с использованием усиленной квалифицированной
                                    (отсоединяемой) электронной подписи.
                                </li>
                            </ol>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                            Что делать, если Вам отказали
                        </AccordionSummary>
                        <AccordionDetails>
                            <ol>
                                <li>Данные для авторизации в личном кабинете</li>
                                <li>Квалифицированный сертификат ключа
                                    проверки электронной подписи.
                                </li>
                                <li>Сведения, документы и материалы в соответствии
                                    с Методическими рекомендациями.
                                </li>
                                <li>Установить специализированное ПО для подписания
                                    документов электронной подписью. Подписание
                                    производится с использованием усиленной квалифицированной
                                    (отсоединяемой) электронной подписи.
                                </li>
                            </ol>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                            Изменение реестревой записи
                        </AccordionSummary>
                        <AccordionDetails>
                            <ol>
                                <li>Данные для авторизации в личном кабинете</li>
                                <li>Квалифицированный сертификат ключа
                                    проверки электронной подписи.
                                </li>
                                <li>Сведения, документы и материалы в соответствии
                                    с Методическими рекомендациями.
                                </li>
                                <li>Установить специализированное ПО для подписания
                                    документов электронной подписью. Подписание
                                    производится с использованием усиленной квалифицированной
                                    (отсоединяемой) электронной подписи.
                                </li>
                            </ol>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Faq