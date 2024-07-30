/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Rule_agregarsubtotalivatotal(context) {

    let cantcontrol = context.getPageProxy().getControl('SectionedTable0').getSection('formulario').getControl("FormCellSimpleProperty0");
    
    let precio = context.evaluateTargetPath('#Page:AgregarProducto/#Control:FormCellListPicker0/#Value')[0].ReturnValue;
    let subtotalcontrol = context.getPageProxy().getControl('SectionedTable0').getSection('formulario').getControl("subtotal");
    subtotalcontrol.setValue(precio*cantcontrol.getValue());
    subtotalcontrol.setVisible(true, true);

    let ivacontrol = context.getPageProxy().getControl('SectionedTable0').getSection('formulario').getControl("FormCellSimpleProperty3");
    ivacontrol.setValue(precio*0.19);
    ivacontrol.setVisible(true, true);

    let totalcontrol = context.getPageProxy().getControl('SectionedTable0').getSection('formulario').getControl("FormCellSimpleProperty4");
    totalcontrol.setValue(precio+(precio*0.19));
    totalcontrol.setVisible(true, true);

    let fechacontrol = context.getPageProxy().getControl('SectionedTable0').getSection('formulario').getControl("FormCellDatePicker0");
    fechacontrol.setVisible(true, true);

    let botoncontrol = context.getPageProxy().getControl('SectionedTable0').getSection('formulario').getControl("FormCellButton0");
    botoncontrol.setVisible(true, true);
    

}
