import React from 'react';
import css from './index.css';

const logoColors = [
    { color: '#cd6a6e' },
    { color: '#5fb388' },
    { color: '#95b9ed' },
    { color: '#bdbb5a' },
    { color: '#b672cc' }
];

const logoColorsAct = [
    { backgroundColor: '#ffd8de', color: '#cd6a6e'},
    { backgroundColor: '#caeecd', color: '#5fb388' },
    { backgroundColor: '#cae0e6', color: '#95b9ed' },
    { backgroundColor: '#ffffaa', color: '#bdbb5a' },
    { backgroundColor: '#e9cbee', color: '#b672cc' }
];

export default ({stations, selectedIdx, playerOpen}) => {
    const items = stations
        .map((file, index) => (
            <tr key={index} onClick={() => playerOpen(file)}>
                <td>
                    <div className={css.selectorLogo}
                         style={(index === selectedIdx ? logoColorsAct : logoColors)[index % 5]}>
                        <i className={'fa fa-fw fa-microphone'}/>
                    </div>
                </td>
                <td style={{width: '100%'}}>
                    <div className={css.selectorTitle}>{file.title}</div>
                </td>
            </tr>
        ));

    return (
        <div>
            <table className={css.selectorList} cellSpacing='0' cellPadding='0'>
                <tbody>
                <tr key={-1} className={css.selectorDummy}>
                    <td colSpan="2"/>
                </tr>
                {items}
                </tbody>
            </table>
        </div>
    );
};