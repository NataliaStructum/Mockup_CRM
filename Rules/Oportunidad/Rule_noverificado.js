/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default async function Rule_noverificado(context) {

    

    let botonverificar = context.evaluateTargetPathForAPI('#Page:DetalleInfo').getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl("FormCellButton0");
    //botonverificar.setValue(precio*cantcontrol.getValue());
    botonverificar.setVisible(false);

    let estado = context.evaluateTargetPathForAPI('#Page:DetalleInfo').getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl("FormCellSimpleProperty1");
    estado.setValue("No Verificado");

    await context.executeAction("/crmMock/Actions/Oportunidades/Close_verificacion.action");
    
}
