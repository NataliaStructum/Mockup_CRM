/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Rule_Redibujar(context) {

    let container = context.getPageProxy().getControl('SectionedTable0');
    let info = context.getPageProxy().getControl('SectionedTable0').getSection('SectionObjectHeader0');
    let boton = context.getPageProxy().getControl('SectionedTable0').getSection('SectionButtonTable0');
    //alert(boton.getType());
    info.setVisible(true, true);
    boton.setVisible(true, true);


    let lista = context.getPageProxy().getControl('SectionedTable0').getSection('SectionObjectTable0');
    
    lista.setVisible(true,true);


    let form = context.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell1');
    form.setVisible(true, true);
    //container.redraw();
}
