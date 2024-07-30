/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Rule_rechazar(context) {

    let estado = context.getPageProxy().getControl('SectionedTable0').getSection('SectionKeyValue0');
    estado.setVisible(true, true);

    let botones = context.getPageProxy().getControl('SectionedTable0').getSection('SectionButtonTable0');
    botones.setVisible(false);
}
