/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Rule_cumplerequerimientos(context) {
    let botones = context.getPageProxy().getControl('SectionedTable0').getSection('SectionButtonTable2');
    botones.setVisible(false);

    let boton = context.getPageProxy().getControl('SectionedTable0').getSection('SectionButtonTable3');
    boton.setVisible(true);

    let estado = context.getPageProxy().getControl('SectionedTable0').getSection('SectionKeyValue0');
    estado.KeyAndValues[0].Value = "Aceptada";
    
}
