/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Rule_aceptar(context) {

    let plan = context.getPageProxy().getControl('SectionedTable0').getSection('SectionButtonTable1');
    plan.setVisible(true, true);

    let botones = context.getPageProxy().getControl('SectionedTable0').getSection('SectionButtonTable0');
    botones.setVisible(false);

    let fin = context.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0');
    fin.setVisible(true, true);

}
