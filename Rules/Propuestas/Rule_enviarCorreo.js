/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Rule_enviarCorreo(context) {
    let utils = context.nativescript.utilsModule;
    let correo = context.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl("FormCellSimpleProperty0").getValue();

    let asunto = "Link%20Indata";
    let cuerpo= "A%20continuación%20compartimos%20el%20enlace%20para%20el%20seguimiento%20del%20despacho%20de%20pedido:%20https://www.google.com/"
    let mailto = `mailto:${correo}?subject=${asunto}&body=${cuerpo}`;
    return utils.openUrl(mailto);
}
