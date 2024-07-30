/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default async function Rule_verificado(context) {
        
    

    let botonverificar = context.evaluateTargetPathForAPI('#Page:DetalleInfo').getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl("FormCellButton0");
    //botonverificar.setValue(precio*cantcontrol.getValue());
    botonverificar.setVisible(false);

    let estado = context.evaluateTargetPathForAPI('#Page:DetalleInfo').getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl("FormCellSimpleProperty1");
    estado.setValue("Verificado");


    let botonadd = context.evaluateTargetPathForAPI('#Page:DetalleInfo').getPageProxy().getControl('SectionedTable0').getSection('SectionButtonTable1');
    let lista = context.evaluateTargetPathForAPI('#Page:DetalleInfo').getPageProxy().getControl('SectionedTable0').getSection('SectionObjectTable0');
    let botonreq = context.evaluateTargetPathForAPI('#Page:DetalleInfo').getPageProxy().getControl('SectionedTable0').getSection('SectionButtonTable2');
    
    botonadd.setVisible(true, true);
    lista.setVisible(true, true);
    botonreq.setVisible(true, true);

    await context.executeAction("/crmMock/Actions/Oportunidades/Close_verificacion.action");

}
