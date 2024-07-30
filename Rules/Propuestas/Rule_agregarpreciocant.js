/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Rule_agregarpreciocant(context) {

    let precio = context.evaluateTargetPath('#Page:AgregarProducto/#Control:FormCellListPicker0/#Value')[0].ReturnValue;
    let preciocontrol = context.getPageProxy().getControl('SectionedTable0').getSection('formulario').getControl("FormCellSimpleProperty1");
    preciocontrol.setValue(precio);
    preciocontrol.setVisible(true, true);

    let cantidad = context.getPageProxy().getControl('SectionedTable0').getSection('formulario').getControl("FormCellSimpleProperty0");
    cantidad.setVisible(true,true);

}
