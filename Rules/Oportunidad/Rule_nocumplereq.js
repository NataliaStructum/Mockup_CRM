/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Rule_nocumplereq(context) {
    let botones = context.getPageProxy().getControl('SectionedTable0').getSection('SectionButtonTable2');
    botones.setVisible(false);

    estado.KeyAndValues[0].Value = "No Aceptada";

}
