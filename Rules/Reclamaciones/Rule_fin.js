/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Rule_fin(context) {

    let fin = context.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0');
    fin.setVisible(true, true);
}
